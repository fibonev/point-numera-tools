(function () {
  var yearTargets = document.querySelectorAll('[data-year]');
  var currentYear = new Date().getFullYear();
  yearTargets.forEach(function (el) { el.textContent = currentYear; });
})();
