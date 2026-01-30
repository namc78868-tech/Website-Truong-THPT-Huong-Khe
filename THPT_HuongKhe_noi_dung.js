// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Header blur effect on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(255, 255, 255, 0.12)';
  } else {
    header.style.background = 'var(--glass-bg)';
  }
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'floatIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.news-card, .info-card, .feature-item').forEach(el => {
  observer.observe(el);
});
