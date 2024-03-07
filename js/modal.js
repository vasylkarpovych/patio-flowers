const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open-js');
const modalBtnClose = document.querySelector('.modal-btn-close-js');

// taste second buuton on the page

const modalBtnOpenSecond = document.querySelector('.modal-btn-open-js-second');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnOpenSecond.addEventListener('click', toggleModal);
