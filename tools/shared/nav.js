(function () {
  var root = document.getElementById('pn-nav-root');
  if (!root) return;

  var path = window.location.pathname.replace(/\/+/g, '/');
  var isRoot = path === '/' || path === '/index.html';
  var logoSrc = root.getAttribute('data-logo') || './tools/shared/logo.svg';

  root.innerHTML =
    '<header class="top-nav">' +
      '<div class="container">' +
        '<a class="brand" href="/">' +
          '<img src="' + logoSrc + '" alt="Point Numera logo" />' +
        '</a>' +
        '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<nav class="nav-links">' +
          '<a class="nav-link' + (isRoot ? ' active' : '') + '" href="/">Tools Hub</a>' +
          '<a class="nav-link" href="https://www.pointnumera.com/#contact">Contact</a>' +
          '<a class="nav-link" href="https://www.pointnumera.com">Back to site</a>' +
        '</nav>' +
      '</div>' +
    '</header>';

  var toggle = root.querySelector('.nav-toggle');
  var links  = root.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open', !expanded);
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
      });
    });
  }
})();
