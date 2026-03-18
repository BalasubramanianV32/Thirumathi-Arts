// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE NAV =====
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const navOverlay = document.querySelector('.nav-overlay');
const mobileNavClose = document.querySelector('.mobile-nav-close');

function openMobileNav() {
  mobileNav.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  mobileNav.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMobileNav);
if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
if (navOverlay) navOverlay.addEventListener('click', closeMobileNav);

// ===== SCROLL FADE-IN =====
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// ===== FILTER BUTTONS =====
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const cards = document.querySelectorAll('.product-card[data-category]');
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        setTimeout(() => card.style.opacity = '1', 10);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// ===== WHATSAPP ORDER =====
function orderOnWhatsApp(productName) {
  const phone = '916374183596'; // Replace with actual number
  const message = encodeURIComponent(`Hello! I want to order this bangle:\n\n *${productName}*\n\nKindly let me know about availability and delivery. Thank you!`);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

function bookMehendi(serviceType) {
  const phone = '916374183596'; // Replace with actual number
  const msg = serviceType
    ? encodeURIComponent(`Hello!  I'd like to book a Mehendi appointment.\n\nPlease share your availability and pricing. Thank you!`)
    : encodeURIComponent(`Hello! I'd like to book a Mehendi appointment.\n\nPlease share your availability and pricing. Thank you!`);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
