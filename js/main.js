document.addEventListener('DOMContentLoaded', async function(){

    const menuBtn = document.querySelector('.header__menu-icon');
    const menuCloseBtn = document.querySelector('.menu__close-icon');
    const menuDiv = document.querySelector('.menu');
    
    menuBtn.addEventListener('click', function(){
        menuDiv.classList.add('is-active'); 
        menuBtn.setAttribute('aria-expanded', 'true'); 
        menuCloseBtn.focus();
    });

    menuCloseBtn.addEventListener('click', function(){
        menuDiv.classList.remove('is-active'); 
        menuBtn.setAttribute('aria-expanded', 'false'); 
        menuBtn.focus();
    });

});