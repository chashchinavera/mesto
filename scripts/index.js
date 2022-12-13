const popupEditElement = document.querySelector('#edit');
const popupAddElement = document.querySelector('#add');
const popupImageElement = document.querySelector('#image');
const popupElement = document.querySelector('.popup')
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

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


//openAddPopup
const openAddPopup = function () {
    popupAddElement.classList.add('popup_opened');
}

popupAddOpenButtonElement.addEventListener('click', openAddPopup);


//closePopup
const closePopup = function () {
    popupAddElement.classList.remove('popup_opened');
    popupEditElement.classList.remove('popup_opened');
    popupImageElement.classList.remove('popup_opened');
}

popupEditCloseButtonElement.addEventListener('click', closePopup);
popupAddCloseButtonElement.addEventListener('click', closePopup);
popupImageCloseButtonElement.addEventListener('click', closePopup);


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
        const deleteElement = deleteButton.closest('.element');
        deleteElement.remove();
    });

    //ImagePopup
    const popupImageOpenButtonElement = card.querySelector('.element__image');

    const openImagePopup = function () {
        const popupImage = document.querySelector('.popup__image');
        popupImage.src = item.link;
        popupImage.alt = item.name;
        const popupCaption = document.querySelector('.popup__caption');
        popupCaption.textContent = item.name;

        popupImageElement.classList.add('popup_opened');
    }

    popupImageOpenButtonElement.addEventListener('click', openImagePopup);


    return card;
};

initialCards.forEach(function (item) {
    const a = createElement(item);
    initialCardsElement.append(a);
});


//createPopup
const createCard = function (item) {
    initialCardsElement.prepend(createElement(item));
}

const createPopup = function (evt) {
    evt.preventDefault();
    createCard({ name: popupInputInfoPlace.value, link: popupInputInfoImage.value })
    popupInputInfoPlace.value = '';
    popupInputInfoImage.value = '';
    closePopup();
}

formCreate.addEventListener('submit', createPopup);


//openEditPopup
const openEditPopup = function () {
    popupInputInfoName.value = profileName.textContent;
    popupInputInfoStatus.value = profileStatus.textContent;
    popupEditElement.classList.add('popup_opened');
}

popupEditOpenButtonElement.addEventListener('click', openEditPopup);



//submitPopup
const submitPopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputInfoName.value;
    profileStatus.textContent = popupInputInfoStatus.value;
    closePopup();
}

formSubmit.addEventListener('submit', submitPopup);



