const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open-js');
const modalBtnClose = document.querySelector('.modal-btn-close-js');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
