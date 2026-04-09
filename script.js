// ─── THEME TOGGLE ───
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  document.querySelector('.theme-icon').textContent =
    html.dataset.theme === 'dark' ? '🌙' : '☀️';
}

// ─── BURGER MENU ───
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.burger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// ─── SCROLL ANIMATIONS ───
const obs = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      setTimeout(() => el.target.classList.add('vis'), el.target.dataset.d || 0);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.tl-item').forEach((el, i) => {
  el.dataset.d = i * 140; obs.observe(el);
});
document.querySelectorAll('.skill-card').forEach((el, i) => {
  el.dataset.d = i * 70; obs.observe(el);
});
document.querySelectorAll('.tool-pill').forEach((el, i) => {
  el.dataset.d = i * 50; obs.observe(el);
});