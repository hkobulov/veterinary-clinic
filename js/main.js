var elHamburgerBtn = document.querySelector('.service-list__item__heading');
var elHeader = document.querySelector('.service-list__item');

elHamburgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("service--open");
})