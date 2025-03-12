document.addEventListener('DOMContentLoaded', function() {
    const langSelected = document.querySelector('.lang__selected');
    const headerContentLang = document.querySelector('.header__content-lang');
    langSelected.addEventListener('click', function(e) {
        e.preventDefault();
        headerContentLang.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
        if (!headerContentLang.contains(e.target) && e.target !== langSelected) {
            headerContentLang.classList.remove('active');
        }
    });
});
function checkScroll() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY >= 50);
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('load', checkScroll);


const contentTime = document.querySelector('.header__content-time');
const contentLang = document.querySelector('.header__content-lang');
const headerMenu = document.querySelector('.header__menu');
const headerBtn = document.querySelector('.header__btn');
const menuList = headerMenu.querySelector('ul');
const contentTop = document.querySelector('.header__content-top');
const headerContent = document.querySelector('.header__content');
const originalTimeParent = contentTime.parentElement;
const originalLangParent = contentLang.parentElement;
const originalBtnParent = headerBtn.parentElement;
function handleScreenSize() {
    if (window.innerWidth < 1000) {
        if (contentTime && headerMenu) {
            headerMenu.insertBefore(contentTime, headerMenu.firstChild);
        }
        if (contentLang && headerMenu && contentTime) {
            headerMenu.insertBefore(contentLang, contentTime.nextSibling);
        }
        if (headerBtn && menuList) {
            menuList.appendChild(headerBtn);
        }
    } else {
        if (contentTime && originalTimeParent) {
            originalTimeParent.appendChild(contentTime);
        }        
        if (contentLang && originalLangParent) {
            originalLangParent.appendChild(contentLang);
        }        
        if (headerBtn && originalBtnParent) {
            originalBtnParent.appendChild(headerBtn);
        }
    }
}
handleScreenSize();
window.addEventListener('resize', handleScreenSize);


const headerBurger = document.querySelector('.header__burger');
const headerMenuClose = document.querySelector('.header__menu-close');
headerBurger.addEventListener('click', () => {
    headerMenu.classList.add('active');
});
headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('active');
});
document.addEventListener('click', (event) => {
    if (!headerMenu.contains(event.target) && !headerBurger.contains(event.target)) {
        headerMenu.classList.remove('active');
    }
});

const popupOpenButtons = document.querySelectorAll('.popup-open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupInner = document.querySelector('.popup__inner');
popupOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('show');
    });
});
popupClose.addEventListener('click', () => {
    popup.classList.remove('show');
});
popup.addEventListener('click', (e) => {
    if (!popupInner.contains(e.target)) {
        popup.classList.remove('show');
    }
});



const morePopupOpenButtons = document.querySelectorAll('.more-open');
const morePopup = document.querySelector('.morePopup');
const morePopupClose = document.querySelector('.morePopup__close');
const morePopupInner = document.querySelector('.morePopup__inner');
morePopupOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        morePopup.classList.add('show');
    });
});
morePopupClose.addEventListener('click', () => {
    morePopup.classList.remove('show');
});
morePopup.addEventListener('click', (e) => {
    if (!morePopupInner.contains(e.target)) {
        morePopup.classList.remove('show');
    }
});