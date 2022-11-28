<<<<<<< HEAD
//Elements
const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');
const formSubmit = document.querySelector('form');

//Buttons
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status');
const popupInputInfoName = popupElement.querySelector('.popup__input_info_name');
const popupInputInfoStatus = popupElement.querySelector('.popup__input_info_status');

//Functions
const openPopup = function () {
    popupInputInfoName.value = profileName.textContent;
    popupInputInfoStatus.value = profileStatus.textContent;
    popupElement.classList.add('popup_opened');
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const submitPopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputInfoName.value;
    profileStatus.textContent = popupInputInfoStatus.value;
    closePopup();
}

//AddEventListener
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formSubmit.addEventListener('submit', submitPopup);
=======
//Elements
const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');

//Buttons
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit');

const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status');
const popupInputInfoName = popupElement.querySelector('.popup__input_info_name');
const popupInputInfoStatus = popupElement.querySelector('.popup__input_info_status');

//Functions
const openPopup = function () {
    popupInputInfoName.value = profileName.textContent;
    popupInputInfoStatus.value = profileStatus.textContent;
    popupElement.classList.add('popup_opened');
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const submitPopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputInfoName.value;
    profileStatus.textContent = popupInputInfoStatus.value;
    closePopup();
}

//AddEventListener
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitButtonElement.addEventListener('submit', submitPopup);
>>>>>>> 7318833f170e2f211534d415f8f86080b3515677
