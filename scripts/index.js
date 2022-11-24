//Elements
const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');

//Buttons
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit');

const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status')
const popupInputNameName = popupElement.querySelector('.popup__input_name_name');
const popupInputNameStatus = popupElement.querySelector('.popup__input_name_status');

//Functions
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupInputNameName.value = profileName.textContent;
    popupInputNameStatus.value = profileStatus.textContent;
}
 
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

const submitPopup = function() {
    profileName.textContent = popupInputNameName.value;
    profileStatus.textContent = popupInputNameStatus.value;
    popupElement.classList.remove('popup_opened');
}

//AddEventListener
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitButtonElement.addEventListener('click', submitPopup);