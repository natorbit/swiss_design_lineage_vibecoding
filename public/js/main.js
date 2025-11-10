// Main JS for demo interactions: smooth scroll, toast notifications, confirm handling
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links to ids
  document.querySelectorAll('a[href^="#"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var href = el.getAttribute('href');
      if (!href || href === '#') return; // leave for other handlers
      if (href.startsWith('#')) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Toast container
  var toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);

  function showToast(message, timeout) {
    timeout = timeout || 3000;
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = message;
    toastContainer.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('visible'); });
    setTimeout(function () {
      t.classList.remove('visible');
      setTimeout(function () { t.remove(); }, 300);
    }, timeout);
  }

  // data-action handlers
  document.querySelectorAll('[data-action]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var action = el.getAttribute('data-action');
      var msg = el.getAttribute('data-message') || '';
      if (action === 'notify') {
        showToast(msg || 'Action performed');
      } else if (action === 'confirm') {
        if (confirm(msg || 'Are you sure?')) {
          showToast('Confirmed');
        } else {
          showToast('Cancelled');
        }
      }
    });
  });

  // prevent anchors with href="#" from jumping
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });
});
