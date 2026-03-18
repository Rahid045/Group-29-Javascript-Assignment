/* Consolidated site JS: nav toggle, cart counter, misc UI helpers */
document.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const closeBtn = document.getElementById('nav-close-btn');

  function openNav() {
    navbar && navbar.classList.add('active');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    if (toggle) toggle.textContent = '✕';
  }
  function closeNav() {
    navbar && navbar.classList.remove('active');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '☰';
  }

  toggle?.addEventListener('click', () => {
    if (!navbar) return;
    if (navbar.classList.contains('active')) closeNav(); else openNav();
  });
  closeBtn?.addEventListener('click', closeNav);

  // Close menu when clicking a link (mobile)
  document.querySelectorAll('#navbar a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeNav();
    });
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // CART COUNTER (demo) - persists in localStorage
  (function () {
    const KEY = 'ramos_cart_count';
    const countEl = document.getElementById('cart-count');
    if (!countEl) return;
    let count = parseInt(localStorage.getItem(KEY) || '0', 10) || 0;
    countEl.textContent = String(count);

    function setCount(n) {
      count = Math.max(0, n);
      localStorage.setItem(KEY, String(count));
      countEl.textContent = String(count);
    }

    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        setCount(count + 1);
        btn.animate([{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }], { duration: 120 });
      });
    });
  })();

  // Set year in elements with id 'year'
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Simple smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth <= 900) closeNav();
      }
    });
  });
});
