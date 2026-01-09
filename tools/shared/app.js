(function () {
  const yearTargets = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearTargets.forEach((el) => (el.textContent = currentYear));

  const navLinks = document.querySelectorAll('[data-nav]');
  const pathRaw = window.location.pathname.replace(/\/+/g, '/');
  const currentPath = pathRaw.endsWith('/') ? pathRaw : `${pathRaw}/`;

  navLinks.forEach((link) => {
    const targetPathRaw = new URL(link.getAttribute('href'), window.location.origin).pathname.replace(/\/+/g, '/');
    const targetPath = targetPathRaw.endsWith('/') ? targetPathRaw : `${targetPathRaw}/`;
    const isActive = currentPath === targetPath || currentPath.startsWith(targetPath);
    if (isActive) {
      link.classList.add('active');
    }
  });
})();
