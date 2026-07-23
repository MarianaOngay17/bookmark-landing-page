document.addEventListener('DOMContentLoaded', async function(){
   menu();
   features();
   contact();
});


function menu(){
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
}

function features(){
    const tabsBtn = document.querySelectorAll('.features__tab');

    tabsBtn.forEach(tab => {
        tab.addEventListener('click', function(){
            tabsBtn.forEach(t => t.classList.remove('features__tab--active'));
            tab.classList.add('features__tab--active');
            changeFeaturesInfo(tab.id);
        });
    });
}

function changeFeaturesInfo(tab){

    const title = document.querySelector('.features__info-title');
    const description = document.querySelector('.features__info-description');

    title.classList.add('fade-out');
    description.classList.add('fade-out');

    setTimeout(() => {

        switch(tab){
            case 'tab-simple':
                title.textContent = 'Bookmark in one click';
                description.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.`
                break;
            case 'tab-speedy':
                title.textContent = 'Intelligent search';
                description.textContent = `Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.`
                break;
            case 'tab-easy':
                title.textContent = 'Share your bookmarks';
                description.textContent = `Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.`
                break;
        }
        
        title.classList.remove('fade-out');
        description.classList.remove('fade-out');

    }, 300);
}

function contact(){
    const form = document.querySelector('.contact__form');
    const inputEmail = document.querySelector('.contact__input');
    const formGroup = document.querySelector('.contact__form-group');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateEmail(inputEmail.value)) {
        formGroup.classList.add('contact__form-group--error');
    } else {
        formGroup.classList.remove('contact__form-group--error');
    }
    });
}