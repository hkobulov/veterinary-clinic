var elOpenModalButton = document.querySelector('.js-modal-open');
var elModal = document.querySelector('.js-modal');
var closeButton = document.querySelector('.exit-button');

elOpenModalButton.addEventListener('click', function ()  {
    elModal.classList.add('modal-open')
});

closeButton.addEventListener('click', function(){
    elModal.classList.remove('modal-open')
});

// FAQ

elsqaItem = document.querySelectorAll('.faq-list__item');
elsqaToggler = document.querySelectorAll('.faq-list__item__btn');

elsqaToggler.forEach(function (toggler) {
  toggler.addEventListener('click',function () {
      toggler.closest('.faq-list__item').classList.toggle('faq--open');
  })
})
