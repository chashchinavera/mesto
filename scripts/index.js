//Elements
const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');

//Buttons
const elementLikeButtonElement = document.querySelectorAll('.element__like');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit');

const profileName = profileElement.querySelector('.profile__name');
const profileStatus = profileElement.querySelector('.profile__status')
const popupInputNameName = popupElement.querySelector('.popup__input_name_name');
const popupInputNameStatus = popupElement.querySelector('.popup__input_name_status');

//Functions
const activeElementLike0 = function () {
    elementLikeButtonElement[0].classList.toggle('element__like_active');
}

const activeElementLike1 = function () {
    elementLikeButtonElement[1].classList.toggle('element__like_active');
}

const activeElementLike2 = function () {
    elementLikeButtonElement[2].classList.toggle('element__like_active');
}

const activeElementLike3 = function () {
    elementLikeButtonElement[3].classList.toggle('element__like_active');
}

const activeElementLike4 = function () {
    elementLikeButtonElement[4].classList.toggle('element__like_active');
}

const activeElementLike5 = function () {
    elementLikeButtonElement[5].classList.toggle('element__like_active');
}

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    popupInputNameName.value = profileName.textContent;
    popupInputNameStatus.value = profileStatus.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const submitPopup = function () {
    profileName.textContent = popupInputNameName.value;
    profileStatus.textContent = popupInputNameStatus.value;
    popupElement.classList.remove('popup_opened');
}

//AddEventListener
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitButtonElement.addEventListener('click', submitPopup);
elementLikeButtonElement[0].addEventListener('click', activeElementLike0);
elementLikeButtonElement[1].addEventListener('click', activeElementLike1);
elementLikeButtonElement[2].addEventListener('click', activeElementLike2);
elementLikeButtonElement[3].addEventListener('click', activeElementLike3);
elementLikeButtonElement[4].addEventListener('click', activeElementLike4);
elementLikeButtonElement[5].addEventListener('click', activeElementLike5);

