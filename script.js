// 1. Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// 2. Close menu + set active link on click
const links = nav.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// 3. Highlight nav link of the section currently on screen
const sections = document.querySelectorAll('section[id], footer[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => observer.observe(s));

// 4. Footer year
document.getElementById('year').textContent = new Date().getFullYear();