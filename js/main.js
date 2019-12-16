/*
 document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const toggleModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click',toggleModal);
  });
  
  closeBtn.addEventListener('click',toggleModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
});
