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

var elHamburgerBtn = document.querySelector('.faq-list__item__btn');
var elHeader = document.querySelector('.faq-list__item');

elHamburgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("faq--open");
})