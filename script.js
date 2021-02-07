'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closePoup = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openPopup = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i=0; i < btnsOpenModal.length; i++)

btnsOpenModal[i].addEventListener('click', openPopup)
btnCloseModal.addEventListener('click', closePoup)
overlay.addEventListener('click', closePoup)