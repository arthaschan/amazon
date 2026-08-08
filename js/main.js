// Smooth scroll behavior already handled by CSS scroll-behavior: smooth
// FAQ analytics and interaction tracking

document.addEventListener('DOMContentLoaded', () => {
  // Track FAQ interactions for optimization purposes
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        const question = item.querySelector('summary').textContent.trim();
        // In production, you'd send this to your analytics
        console.debug('[FAQ Open]', question);
      }
    });
  });

  // Nav shadow on scroll
  const nav = document.querySelector('.nav');
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastScrollY = scrollY;
  }, { passive: true });

  // Current year for footer if needed dynamically
  // Footer is static for now as it's SEO-friendly
});
