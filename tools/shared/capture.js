(() => {
  const DEFAULT_SUCCESS_TEXT = "✅ Sent! Check your inbox (and spam).";
  const ERROR_TEXT = "Something went wrong — please try again.";

  const setMessage = (el, text, type) => {
    if (!el) return;
    el.textContent = text;
    el.classList.remove("form-msg-error", "form-msg-success");
    if (type === "error") {
      el.classList.add("form-msg-error");
    } else if (type === "success") {
      el.classList.add("form-msg-success");
    }
    el.style.display = text ? "block" : "none";
  };

  const parseResponse = async (response) => {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch (err) {
      return text;
    }
  };

  const isSuccess = (data) => {
    if (!data) return false;
    if (typeof data === "object") {
      if (data.success === true) return true;
      if (data.status === "success" || data.result === "success") return true;
    }
    if (typeof data === "string") {
      return /success|subscribed|thank/i.test(data);
    }
    return false;
  };

  const attachCaptureHandler = (form) => {
    if (!form) return;
    form.removeAttribute("target");

    const successText =
      form.getAttribute("data-success-message") || DEFAULT_SUCCESS_TEXT;

    const rowForm = form.querySelector(".row-form");
    const rowSuccess = form.querySelector(".row-success");
    const errorMessageEl =
      form.querySelector(".row-form .form-msg") || form.querySelector(".form-msg");
    const successMessageEl =
      form.querySelector(".row-success .form-msg") || form.querySelector(".form-msg");
    const fieldsContainer = form.querySelector(".capture-fields") || form;
    const staticSuccess =
      successMessageEl && successMessageEl.hasAttribute("data-static");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      setMessage(errorMessageEl, "", null);
      if (!staticSuccess) setMessage(successMessageEl, "", null);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
        });
        const data = await parseResponse(response);
        if (isSuccess(data)) {
          if (rowForm && rowSuccess) {
            rowForm.style.display = "none";
            rowSuccess.style.display = "grid";
          } else {
            const hideOnSuccessEls = form.querySelectorAll(
              ".capture-hide-on-success"
            );
            if (hideOnSuccessEls.length) {
              hideOnSuccessEls.forEach((el) => {
                el.style.display = "none";
              });
            } else if (fieldsContainer) {
              fieldsContainer.style.display = "none";
            }
          }

          if (staticSuccess) {
            if (successMessageEl) successMessageEl.style.display = "block";
          } else {
            setMessage(successMessageEl, successText, "success");
          }
          return;
        }
        throw new Error("Submission failed");
      } catch (err) {
        if (rowForm && rowSuccess) {
          rowForm.style.display = "";
          rowSuccess.style.display = "none";
        }
        setMessage(errorMessageEl, ERROR_TEXT, "error");
      }
    });
  };

  window.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form[data-capture]");
    forms.forEach(attachCaptureHandler);
  });
})();
