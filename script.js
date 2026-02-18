/* ===== NFH Medical Student Orientation Workbook ===== */
/* Interactive Scripts                                   */
/* ================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Scroll Progress Bar =====
  const progressFill = document.getElementById('progressFill');
  const topNav = document.getElementById('topNav');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressFill) {
      progressFill.style.width = (scrollTop / docHeight * 100) + '%';
    }
    if (topNav) {
      topNav.classList.toggle('scrolled', scrollTop > 10);
    }
  });

  // ===== Mobile Menu Toggle =====
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== Active Nav Highlighting on Scroll =====
  const sections = document.querySelectorAll('.section');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        allNavLinks.forEach(l => l.classList.remove('active'));
        const id = entry.target.id;
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-100px 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // ===== Accordion =====
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const inner = body.querySelector('.accordion-body-inner');

      if (item.classList.contains('open')) {
        body.style.maxHeight = '0';
        item.classList.remove('open');
      } else {
        item.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 40 + 'px';
      }
    });

    // Initialize any items that start with the .open class
    const item = header.parentElement;
    if (item.classList.contains('open')) {
      const body = item.querySelector('.accordion-body');
      const inner = body.querySelector('.accordion-body-inner');
      body.style.maxHeight = inner.scrollHeight + 40 + 'px';
    }
  });

  // ===== Checklist Toggles =====
  document.querySelectorAll('.check-box').forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('checked');
    });
  });

  // ===== Fade-In on Scroll =====
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

});
