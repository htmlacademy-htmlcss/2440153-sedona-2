'use strist';

const burgerBtn = document.querySelector(".icon-menu");


burgerBtn.addEventListener('click', () => {
  if (burgerBtn) {
    burgerBtn.classList.toggle('_active');
  }
});
