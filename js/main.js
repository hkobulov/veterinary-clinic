var elOpenModalButton = document.querySelector('.js-modal-open');
var elModal = document.querySelector('.js-modal');
var closeButton = document.querySelector('.exit-button');

elOpenModalButton.addEventListener('click', function ()  {
    elModal.classList.add('modal-open')
});

closeButton.addEventListener('click', function(){
    elModal.classList.remove('modal-open')
});