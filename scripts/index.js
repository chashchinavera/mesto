import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const popups = document.querySelectorAll('.popup');
const popupEditElement = document.querySelector('.popup_type_profile');
const popupAddElement = document.querySelector('.popup_type_card-add');
const popupImageElement = document.querySelector('.popup_type_picture');
const popupContainer = document.querySelector('.popup__container');
const profileElement = document.querySelector('.profile');
const formSubmit = document.querySelector('#submit');
const formCreate = document.querySelector('#create');
const addButton = document.querySelector('#add');

const cardTemplate = document.querySelector('#element').content.querySelector('.element');
const popupImage = popupImageElement.querySelector('.popup__image');
const popupCaption = popupImageElement.querySelector('.popup__caption');

const popupEditOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close');
const popupAddOpenButtonElement = profileElement.querySelector('.profile__add');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close');
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close')

const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status');

const popupInputInfoName = popupEditElement.querySelector('.popup__input_info_name');
const popupInputInfoStatus = popupEditElement.querySelector('.popup__input_info_status');

const popupInputInfoPlace = popupAddElement.querySelector('.popup__input_info_place');
const popupInputInfoImage = popupAddElement.querySelector('.popup__input_info_image');


//openPopup
function openModalWindow(modalWindow) {
    document.addEventListener('keydown', closeByEscape);
    modalWindow.classList.add('popup_opened');
}

popupAddOpenButtonElement.addEventListener('click', () => {
    addButton.classList.add('popup__button_invalid');
    addButton.disabled = 'disabled';
    openModalWindow(popupAddElement)
})

//openEditPopup
popupEditOpenButtonElement.addEventListener('click', () => {
    popupInputInfoName.value = profileName.textContent;
    popupInputInfoStatus.value = profileStatus.textContent;
    openModalWindow(popupEditElement);
})

//closePopup
function closeModalWindow(modalWindow) {
    document.removeEventListener('keydown', closeByEscape);
    modalWindow.classList.remove('popup_opened');
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closeModalWindow(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closeModalWindow(popup)
        }
    })
})

//closePopupByEscape
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const modalWindowOpen = document.querySelector('.popup_opened');
        closeModalWindow(modalWindowOpen);
    }
}

//cards
const initialCardsElement = document.querySelector('.elements');

//addPopup
const addCard = function (item) {
    initialCardsElement.prepend(new Card(item));
    return new Card;
}

formCreate.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard({ name: popupInputInfoPlace.value, link: popupInputInfoImage.value });
    formCreate.reset();
    closeModalWindow(popupAddElement);
});

//submitPopup
formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent = popupInputInfoName.value;
    profileStatus.textContent = popupInputInfoStatus.value;
    closeModalWindow(popupEditElement);
});

const form = new FormValidator({
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_visible'
});

form.enableValidation();