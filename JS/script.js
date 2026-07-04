/* ============================================
   GALAXY WORLD - Main JavaScript
   Adds interactivity to existing design.
   No visual/design changes — behavior only.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNotificationPopup();
  initScrollToTop();
  initColorSelector();
  initSliderHoverPause();
});

/* ---------- 1. Notification Popup Close Button ---------- */
function initNotificationPopup() {
  const popup = document.querySelector('.notification-popup');
  const closeBtn = document.querySelector('.close-button');

  if (!popup || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  });
}

/* ---------- 2. Scroll to Top Button ---------- */
function initScrollToTop() {
  const scrollWrapper = document.querySelector('.scroll-top');
  const scrollButton = document.querySelector('.scroll-top button');

  if (!scrollWrapper || !scrollButton) return;

  // Hidden until user scrolls down a bit
  scrollWrapper.style.opacity = '0';
  scrollWrapper.style.visibility = 'hidden';
  scrollWrapper.style.transition = 'opacity 0.3s ease';

  window.addEventListener('scroll', () => {
    const shouldShow = window.scrollY > 400;
    scrollWrapper.style.opacity = shouldShow ? '1' : '0';
    scrollWrapper.style.visibility = shouldShow ? 'visible' : 'hidden';
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- 3. Color Option Selector ---------- */
function initColorSelector() {
  const colorOptions = document.querySelectorAll('.color-option');

  colorOptions.forEach((option) => {
    option.addEventListener('click', () => {
      document
        .querySelectorAll('.color-circle')
        .forEach((circle) => circle.classList.remove('selected'));

      option.querySelector('.color-circle').classList.add('selected');
    });
  });
}

/* ---------- 4. Slider: Pause Animation on Hover ---------- */
function initSliderHoverPause() {
  const slider = document.querySelector('.slides');
  if (!slider) return;

  slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
  });

  slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
  });
}
