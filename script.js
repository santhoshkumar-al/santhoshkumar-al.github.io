
// Theme management
document.addEventListener('DOMContentLoaded', function() {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const htmlElement = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      
      // Close mobile menu after theme toggle
      const navLinks = document.querySelector('.nav-links');
      const navToggle = document.querySelector('.nav-toggle');
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  function updateThemeIcon(theme) {
    themeToggles.forEach(toggle => {
      toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    });
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Smooth scroll
Array.from(document.querySelectorAll('a[href^="#"]')).forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      
      // Update active link
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
      a.classList.add('active');
    }
  });
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightActiveSection() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);


// Contact form (client-side only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name')||'').trim();
  const email = String(data.get('email')||'').trim();
  const message = String(data.get('message')||'').trim();
  if(!name || !email || !message){
    statusEl.textContent = '*Please fill in all fields.';
    return;
  }
  // Fallback: open mail client with prefilled content
  const subject = encodeURIComponent('Portfolio Inquiry');
  const body = encodeURIComponent(`${name} <${email}>

${message}`);
  window.location.href = `mailto:santhoshanbu092@gmail.com?subject=${subject}&body=${body}`;
  statusEl.textContent = 'Opening your email client…';
});

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();
