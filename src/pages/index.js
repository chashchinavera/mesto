import { classListForm } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDelete from '../components/PopupDelete.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import './index.css';

const popupEditElement = document.querySelector('.popup_type_profile');
const popupAddElement = document.querySelector('.popup_type_card-add');
const popupAvatar = document.querySelector('.popup_type_avatar');
const profileElement = document.querySelector('.profile');

const formSubmit = popupEditElement.querySelector('#submit');
const formCreate = popupAddElement.querySelector('#create');
const formAvatar = popupAvatar.querySelector('#avatarForm');

const popupEditOpenButtonElement = profileElement.querySelector('.profile__edit');
const popupAddOpenButtonElement = profileElement.querySelector('.profile__add');
const popupAvatarButtonElement = profileElement.querySelector('.profile__redact');

const popupInputInfoName = popupEditElement.querySelector('.popup__input_info_name');
const popupInputInfoStatus = popupEditElement.querySelector('.popup__input_info_status');

let userId;

//Попап с картинкой
const popupImageElement = new PopupWithImage('.popup_type_picture');
popupImageElement.setEventListeners();

// Информация о пользователе
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userStatusSelector: '.profile__status',
  userAvatarSelector: '.profile__image'
});

// Создание новой карточки
const newCard = (cardData) => {
  const newCardItem = new Card(cardData, '#element', userId, { cardId: cardData._id, authorId: cardData.owner._id, }, {

    handleCardIncrease: (caption, image) => { popupImageElement.open(caption, image) },

    handleCardPutLike: (cardId) => {
      api.putCardLike(cardId)
        .then((res) => {
          newCardItem.renderCardLike(res);
        })
        .catch((err) => {
          console.log(`Возникла ошибка при лайке карточки, ${err}`);
        })
    },

    handleCardRemoveLike: (cardId) => {
      api.removeCardLike(cardId)
        .then((res) => {
          newCardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`Возникла ошибка при снятии лайка карточки, ${err}`)
        })
    },

    handleCardDelete: (card, cardId) => {
      popupDeleteCard.open(card, cardId)
    },
  });
  return newCardItem.generateCard();
};

// Загрузка карточек с сервера
const cardsSection = new Section({
  renderer: (cardData) => {
    cardsSection.addItem(newCard(cardData));
  }
}, '.elements');

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    userInfo.setUserInfo({ userName: userData.name, userStatus: userData.about })
    cardsSection.renderItems(cardData.reverse());
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) => {
    console.log(`Возникла ошибка в промис, ${err}`);
  });

//Попап удаления карточки
const popupDeleteCard = new PopupDelete('.popup_type_card-delete', {
  callbackDelete: (card, cardId) => {
    api.deleteCard(cardId)
      .then(() => {
        card.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки, ${err}`)
      })
  }
});
popupDeleteCard.setEventListeners();


// Попап редактирования
const popupEditProfile = new PopupWithForm('.popup_type_profile', {
  callbackFormSubmit: (userData) => {
    popupEditProfile.putSubmitButtonText();
    api.sendUserData(userData)
      .then((res) => {
        userInfo.setUserInfo({ userName: res.name, userStatus: res.about });
        popupEditProfile.close();
      })
      .catch
      ((err) => {
        console.log(`Ошибка при редактировании профиля возникла , ${err}`);
      })
      .finally(() => {
        popupEditProfile.returnSubmitButtonText();
      })
  }
});
popupEditProfile.setEventListeners();

popupEditOpenButtonElement.addEventListener('click', function () {
  popupEditProfile.open();
  const newUserInfo = userInfo.getUserInfo();
  popupInputInfoName.setAttribute('value', newUserInfo.userName);
  popupInputInfoStatus.setAttribute('value', newUserInfo.userStatus);
});

// Попап добавления новой карточки
const popupAdd = new PopupWithForm('.popup_type_card-add', {
  callbackFormSubmit: (formValues) => {
    popupAdd.putSubmitButtonText();
    api.addNewCard({
      name: formValues.place,
      link: formValues.image
    })
      .then((card) => {
        cardsSection.addItem(newCard(card));
        popupAdd.close();
      })
      .catch((err) => {
        console.log(`При добавлении карточки возникла ошибка, ${err}`);
      })
      .finally(() => {
        popupAdd.returnSubmitButtonText();
      })
  }
});
popupAdd.setEventListeners();

popupAddOpenButtonElement.addEventListener('click', function () {
  popupAdd.open();
  validatorNewCard.resetValidation();
});

// Попап редактирования аватара
const popupEditAvatar = new PopupWithForm('.popup_type_avatar', {
  callbackFormSubmit: (userData) => {
    popupEditAvatar.putSubmitButtonText();
    api.sendAvatarData(userData)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка при обновлении аватара, ${err}`);
      })
      .finally(() => {
        popupEditAvatar.returnSubmitButtonText();
      })
  }
});
popupEditAvatar.setEventListeners();

popupAvatarButtonElement.addEventListener('click', function () {
  popupEditAvatar.open();
  validatorAvatar.resetValidation();
});

//Валидация форм
const validatorNewCard = new FormValidator(classListForm, formCreate);
validatorNewCard.enableValidation();

const validatorUser = new FormValidator(classListForm, formSubmit);
validatorUser.enableValidation();

const validatorAvatar = new FormValidator(classListForm, formAvatar);
validatorAvatar.enableValidation();