const popup = document.querySelector('.popup');
const popupEditElement = document.querySelector('.popup_type_profile');
const popupAddElement = document.querySelector('.popup_type_card-add');
const popupImageElement = document.querySelector('.popup_type_picture');
const popupContainer = document.querySelector('.popup__container');
const profileElement = document.querySelector('.profile');
const formSubmit = document.querySelector('#submit');
const formCreate = document.querySelector('#create');

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
    modalWindow.classList.add('popup_opened');
}

popupAddOpenButtonElement.addEventListener('click', () => openModalWindow(popupAddElement));


//openEditPopup
function openEditPopup() {
    popupInputInfoName.value = profileName.textContent;
    popupInputInfoStatus.value = profileStatus.textContent;
    openModalWindow(popupEditElement);
}
popupEditOpenButtonElement.addEventListener('click', openEditPopup);


//closePopup
function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('popup_opened');
}

popupEditCloseButtonElement.addEventListener('click', () => closeModalWindow(popupEditElement));
popupAddCloseButtonElement.addEventListener('click', () => closeModalWindow(popupAddElement));


//closePopupByEscape
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        const Modal = document.querySelector('.popup_opened');
        closeModalWindow(Modal);
    }
});


//closePopupOverlay
 function closePopupOverlay(evt) {
    if (!evt.target.closest('.popup__container')) {
        closeModalWindow(evt.target.closest('.popup_opened'))
    }
}
document.addEventListener('click', closePopupOverlay);


//cards
const initialCardsElement = document.querySelector('.elements');

function createElement(item) {
    const cardTemplate = document.querySelector('#element').content.querySelector('.element');
    const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.element__title');
    cardTitle.textContent = item.name;
    const cardImage = card.querySelector('.element__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;

    //LikeButton
    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__like_active');
    });

    //DeleteButton
    const deleteButton = card.querySelector('.element__delete');
    deleteButton.addEventListener('click', function () {
        const deleteElement = deleteButton.closest('.element').remove();
    });

    //ImagePopup
    const popupImageOpenButtonElement = card.querySelector('.element__image');

    const openImagePopup = function () {
        const popupImage = popupImageElement.querySelector('.popup__image');
        popupImage.src = item.link;
        popupImage.alt = item.name;
        const popupCaption = popupImageElement.querySelector('.popup__caption');
        popupCaption.textContent = item.name;

        openModalWindow(popupImageElement);
    }

    popupImageOpenButtonElement.addEventListener('click', openImagePopup);

    return card;
};

initialCards.forEach(function (item) {
    const a = createElement(item);
    initialCardsElement.append(a);
});

//closeImagePopup
popupImageCloseButtonElement.addEventListener('click', () => closeModalWindow(popupImageElement));


//addPopup
const addCard = function (item) {
    initialCardsElement.prepend(createElement(item));
}

const addPopup = function (evt) {
    evt.preventDefault();
    addCard({ name: popupInputInfoPlace.value, link: popupInputInfoImage.value });
    formCreate.reset();
    closeModalWindow(popupAddElement);
}

formCreate.addEventListener('submit', addPopup);


//submitPopup
const submitPopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputInfoName.value;
    profileStatus.textContent = popupInputInfoStatus.value;
    closeModalWindow(popupEditElement);
}

formSubmit.addEventListener('submit', submitPopup);