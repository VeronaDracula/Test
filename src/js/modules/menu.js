const popupMenu = document.querySelector('.menu');
const popupMenuCloseBtn = document.querySelector('.header__popup-btn');
const popupLoginOpenBtn = document.querySelector('.menu__item--login');


const icon = document.querySelector('.header__popup-container');

    //функция закрытия popup
function closePopup(popup) {
    popup.classList.remove('menu--is-opened');
    // document.removeEventListener('keydown', closeByEsc);
}

    //функция открытия popup 
function openPopup(popup) {
    popup.classList.add('menu--is-opened');
    // document.addEventListener('keydown', closeByEsc);
}


popupMenuCloseBtn.addEventListener('click', () => {
    icon.classList.toggle("change");
    if(popupMenu.classList.contains('menu--is-opened')) {
        closePopup(popupMenu);
    } else {
        openPopup(popupMenu);
    }
});

popupLoginOpenBtn.addEventListener('click', () => {
    closePopup(popupMenu);
    icon.classList.toggle("change");
});