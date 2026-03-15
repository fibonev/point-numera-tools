(function () {
  const yearTargets = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearTargets.forEach((el) => (el.textContent = currentYear));

  const navLinks = document.querySelectorAll('[data-nav]');
  const pathRaw = window.location.pathname.replace(/\/+/g, '/');
  const currentPath = pathRaw.endsWith('/') ? pathRaw : `${pathRaw}/`;

  navLinks.forEach((link) => {
    const targetPathRaw = new URL(link.getAttribute('href'), window.location.href).pathname.replace(/\/+/g, '/');
    const targetPath = targetPathRaw.endsWith('/') ? targetPathRaw : `${targetPathRaw}/`;
    const isActive = currentPath === targetPath;
    if (isActive) {
      link.classList.add('active');
    }
  });

  // Hamburger menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksEl = document.querySelector('.nav-links');
  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinksEl.classList.toggle('open', !expanded);
    });
    navLinksEl.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinksEl.classList.remove('open');
      });
    });
  }
})();
