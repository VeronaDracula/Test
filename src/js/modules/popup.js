const popupLogin = document.querySelector('.popup');
const popupLoginOpenBtn = document.querySelector('.menu__item--login');
const popupLoginCloseBtn = document.querySelector('.popup__close');



    //функция закрытия popup
function closePopup(popup) {
    popup.classList.remove('active');
    document.removeEventListener('keydown', closeByEsc);
}

    //функция открытия popup 
function openPopup(popup) {
    popup.classList.add('active');
    document.addEventListener('keydown', closeByEsc);
}

    // закрытие popup по Esc
function closeByEsc(evt) {
    const popupIsOpened = document.querySelector('.active');
    if (evt.key === 'Escape') {
        closePopup(popupIsOpened);
    }
}

function closePopupByClickOverlay(evt) {
    const popupIsOpened = document.querySelector('.active');
    if (evt.target === evt.currentTarget) {
        closePopup(popupIsOpened);
    }
}

popupLoginOpenBtn.addEventListener('click', () => {
    openPopup(popupLogin);
});


popupLoginCloseBtn.addEventListener('click', () => {
    closePopup(popupLogin);
});

popupLogin.addEventListener('click', closePopupByClickOverlay);