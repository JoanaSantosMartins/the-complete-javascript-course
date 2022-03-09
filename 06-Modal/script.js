'use strict';

/* ******************************************************************************** */
// 79. PROJECT #2: Modal Window
// 80. Working With Classes
// 81. Handling an "Esc" Keypress Event
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelector('.show-modal'); // first button
const btnsOpenModal = document.querySelectorAll('.show-modal'); // all buttons
// console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

document.addEventListener('keydown', function (event) {
  // console.log('A key was pressed');
  // console.log(event);
  // console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');
    closeModal();
  }
});
