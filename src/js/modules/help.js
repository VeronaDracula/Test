const help = document.querySelector('.help__overlay');
const helpOpenBtn = document.querySelector('.help__open-btn');
const helpLink = document.querySelector('.help__link');


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

helpOpenBtn.addEventListener('click', () => {
    openPopup(help);
});

helpLink.addEventListener('click', () => {
    closePopup(help);
});

help.addEventListener('click', closePopupByClickOverlay);