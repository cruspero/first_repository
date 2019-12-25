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
  

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
     messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть меньше двух букв",
        maxlength: "Имя не должно превышать 15 букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате name@domain.com"
      }
    }

  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть меньше двух букв",
        maxlength: "Имя не должно превышать 15 букв"
      },
      userPhone: "Заполните поле",
      userQuestion: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате name@domain.com"
      }
    }

  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть меньше двух букв",
        maxlength: "Имя не должно превышать 15 букв"
      },
      userPhone: "Заполните поле",
    }

  });

  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "+7 (___) ___-__-__"});

});
