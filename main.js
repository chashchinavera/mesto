/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ }),

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nclass Api {\r\n\r\n  constructor({ link, headers }) {\r\n    this._link = link;\r\n    this._headers = headers;\r\n  }\r\n\r\n  //Обработка ответа сервера\r\n  _handleResponse(res) {\r\n    if (res.ok) {\r\n      return res.json();\r\n    } else {\r\n      return Promise.reject(`код ошибки: ${res.status}`);\r\n    }\r\n  }\r\n\r\n  //Получение информации о пользователе\r\n  getUserData() {\r\n    return fetch(`${this._link}users/me`, {\r\n      headers: this._headers\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  // Отправка информации о пользователе на сервер\r\n  sendUserData(profileData) {\r\n    return fetch(`${this._link}users/me`, {\r\n      method: 'PATCH',\r\n      headers: this._headers,\r\n      body: JSON.stringify({\r\n        name: profileData.name,\r\n        about: profileData.status\r\n      })\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  //Получение карточек с сервера\r\n  getInitialCards() {\r\n    return fetch(`${this._link}cards`, {\r\n      headers: this._headers\r\n    })\r\n      .then(res => {\r\n        if (res.ok) {\r\n          return this._handleResponse(res);\r\n        }\r\n      });\r\n  }\r\n\r\n  //Добавление новой карточки\r\n  addNewCard({ name, link }) {\r\n    return fetch(`${this._link}cards`, {\r\n      method: 'POST',\r\n      headers: this._headers,\r\n      body: JSON.stringify({ name, link })\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  // Удаление карточки с сервера\r\n  deleteCard(cardId) {\r\n    return fetch(`${this._link}cards/${cardId}`, {\r\n      headers: this._headers,\r\n      method: 'DELETE',\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  // Отправка лайка на сервер\r\n  putCardLike(cardId) {\r\n    return fetch(`${this._link}cards/${cardId}/likes`, {\r\n      headers: this._headers,\r\n      method: 'PUT',\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  // Удаление лайка на сервере\r\n  removeCardLike(cardId) {\r\n    return fetch(`${this._link}cards/${cardId}/likes`, {\r\n      headers: this._headers,\r\n      method: 'DELETE',\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n\r\n  // Отправко информации об аватаре на сервер\r\n  sendAvatarData(avatarLink) {\r\n    return fetch(`${this._link}users/me/avatar`, {\r\n      headers: this._headers,\r\n      method: 'PATCH',\r\n      body: JSON.stringify({ avatar: avatarLink.avatarUrl})\r\n    })\r\n      .then(res => {\r\n        return this._handleResponse(res);\r\n      })\r\n  }\r\n}\r\n\r\n\r\nconst api = new Api({\r\n  link: 'https://mesto.nomoreparties.co/v1/cohort-60/',\r\n  headers: {\r\n    authorization: '547614fb-6c6c-41a0-81d5-2f6d1a17b0c6',\r\n    'Content-Type': 'application/json'\r\n  }\r\n});\n\n//# sourceURL=webpack://mesto/./src/components/Api.js?");

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\r\n\r\n    static selectors = {\r\n        template: '#element',\r\n        element: '.element',\r\n        imageButton: '.element__button',\r\n        image: '.element__image',\r\n        deleteButton: '.element__delete',\r\n        name: '.element__title',\r\n        likeButton: '.element__like_button',\r\n        likeButtonActive: 'element__like_active',\r\n        likeCounter: '.element__like_counter'\r\n    }\r\n\r\n    constructor(cardData, selectors, userId, authorData, handleActions) {\r\n        this._cardData = cardData;\r\n        this._name = cardData.name;\r\n        this._link = cardData.link;\r\n        this._id = cardData.id;\r\n        this.templateSelector = selectors;\r\n        this._handleCardIncrease = handleActions.handleCardIncrease;\r\n        this._putLike = handleActions.handleCardPutLike;\r\n        this._removeLike = handleActions.handleCardRemoveLike;\r\n        this._cardDelete = handleActions.handleCardDelete;\r\n        this._userId = userId;\r\n        this._cardId = authorData.cardId;\r\n        this._authorId = authorData.authorId;\r\n    }\r\n\r\n\r\n    _getTemplate() {\r\n        return document\r\n            .querySelector(this.templateSelector)\r\n            .content\r\n            .querySelector(Card.selectors.element)\r\n            .cloneNode(true);\r\n    }\r\n\r\n    deleteCard() {\r\n        this._element.remove();\r\n        this._element = null;\r\n    }\r\n\r\n    renderCardLike(card) {\r\n        this._likePlace = card.likes;\r\n        if (this._likePlace.length === 0) {\r\n            this.likeCounter.textContent = '';\r\n        } else {\r\n            this.likeCounter.textContent = this._likePlace.length;\r\n        }\r\n        if (this._isLiked()) {\r\n            this._likeButton.classList.add(Card.selectors.likeButtonActive);\r\n        } else {\r\n            this._likeButton.classList.remove(Card.selectors.likeButtonActive);\r\n        }\r\n    }\r\n\r\n    _isLiked() {\r\n        return this._likePlace.find((userLike) => userLike._id === this._userId);\r\n    }\r\n\r\n    _toggleLike() {\r\n        if (this._isLiked()) {\r\n            this._removeLike(this._cardId);\r\n        } else {\r\n            this._putLike(this._cardId);\r\n        }\r\n    }\r\n\r\n    _setEventListeners() {\r\n        this._deleteButton = this._element.querySelector(Card.selectors.deleteButton);\r\n        if (this._userId === this._authorId) {\r\n            this._deleteButton.addEventListener('click', () =>  this._cardDelete(this, this._cardId));\r\n          } else {\r\n            this._deleteButton.remove();\r\n          }\r\n        this._likeButton.addEventListener('click', () => this._toggleLike());\r\n        this._element.querySelector(Card.selectors.imageButton).addEventListener('click', () => this._handleCardIncrease(this._name, this._link));\r\n    }\r\n\r\n\r\n    generateCard() {\r\n        this._element = this._getTemplate();\r\n        this._element.querySelector(Card.selectors.name).textContent = this._name;\r\n        this._image = this._element.querySelector(Card.selectors.image);\r\n        this._image.src = this._link;\r\n        this._image.alt = this._name;\r\n        this._likeButton = this._element.querySelector(Card.selectors.likeButton);\r\n        this.likeCounter = this._element.querySelector(Card.selectors.likeCounter);\r\n        this.renderCardLike(this._cardData);\r\n        this._setEventListeners();\r\n        return this._element;\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/Card.js?");

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nclass FormValidator {\r\n\r\n    constructor(params, formElement) {\r\n        this._params = params;\r\n        this._formSelector = params.formSelector;\r\n        this._inputSelector = params.inputSelector;\r\n        this._submitButtonSelector = params.submitButtonSelector;\r\n        this._inactiveButtonClass = params.inactiveButtonClass;\r\n        this._inputErrorClass = params.inputErrorClass;\r\n        this._errorClass = params.errorClass;\r\n        this._formElement = formElement;\r\n        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));\r\n        this._button = this._formElement.querySelector(this._submitButtonSelector);\r\n    }\r\n\r\n    _showInputError(inputItem, errorMessage) {\r\n        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`);\r\n        inputItem.classList.add(this._inputErrorClass);\r\n        errorElement.textContent = errorMessage;\r\n        inputItem.classList.add(this._errorClass);\r\n    }\r\n\r\n    _hideInputError(inputItem) {\r\n        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`);\r\n        inputItem.classList.remove(this._inputErrorClass);\r\n        errorElement.textContent = '';\r\n        inputItem.classList.remove(this._errorClass);\r\n    }\r\n\r\n    _isValid(inputItem) {\r\n        if (!inputItem.validity.valid) {\r\n            this._showInputError(inputItem, inputItem.validationMessage);\r\n        } else {\r\n            this._hideInputError(inputItem);\r\n        }\r\n    }\r\n\r\n    _hasInvalidInput() {\r\n        return this._inputList.some((input) => {\r\n            return !input.validity.valid;\r\n        });\r\n    }\r\n\r\n    _toggleButton = () => {\r\n        if (this._hasInvalidInput()) {\r\n            this._button.classList.add(this._inactiveButtonClass);\r\n            this._button.disabled = true;\r\n        } else {\r\n            this._button.classList.remove(this._inactiveButtonClass);\r\n            this._button.disabled = false;\r\n        }\r\n    }\r\n\r\n    resetValidation() {\r\n        this._inputList.forEach((input) => {\r\n            this._hideInputError(input);\r\n        })\r\n        this._toggleButton();\r\n    }\r\n\r\n    _setEventListener() {\r\n        this._inputList.forEach((input) => {\r\n            input.addEventListener('input', () => {\r\n                this._isValid(input);\r\n                this._toggleButton();\r\n            });\r\n        });\r\n        this._formElement.addEventListener('reset', () => {\r\n            this._toggleButton();\r\n        });\r\n    }\r\n\r\n    enableValidation() {\r\n        this._formElement.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n        });\r\n        this._setEventListener();\r\n        this.resetValidation();\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/FormValidator.js?");

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n\r\n    constructor(popupSelector) {\r\n        this._popup = document.querySelector(popupSelector);\r\n        this._popupButton = this._popup.querySelector('.popup__button');\r\n    }\r\n\r\n    open() {\r\n        this._popup.classList.add('popup_opened');\r\n        document.addEventListener('keydown', this._handleEscClose);\r\n    }\r\n\r\n    close() {\r\n        this._popup.classList.remove('popup_opened');\r\n        document.removeEventListener('keydown', this._handleEscClose);\r\n    }\r\n\r\n    _handleEscClose = (event) => {\r\n        if (event.key === 'Escape') {\r\n            this.close();\r\n        }\r\n    }\r\n\r\n    putSubmitButtonText() {\r\n        this._popupButton.textContent = 'Сохранение...';\r\n    }\r\n\r\n    returnSubmitButtonText() {\r\n        this._popupButton.textContent = 'Сохранить';\r\n    }\r\n\r\n    setEventListeners() {\r\n        this._popup.addEventListener('mousedown', (event) => {\r\n            if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')) {\r\n                this.close();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Popup.js?");

/***/ }),

/***/ "./src/components/PopupDelete.js":
/*!***************************************!*\
  !*** ./src/components/PopupDelete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopupDelete)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupDelete extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(popupSelector, { callbackDelete }) {\r\n        super(popupSelector);\r\n\r\n        this._submitButton = this._popup.querySelector('.form');\r\n        this._callbackDelete = callbackDelete;\r\n    }\r\n\r\n    open(card, cardId) {\r\n        this._card = card;\r\n        this._cardId = cardId;\r\n        super.open();\r\n    }\r\n\r\n    setEventListeners() {\r\n        this._submitButton.addEventListener('submit', (evt) => { \r\n            evt.preventDefault();\r\n            this._callbackDelete(this._card, this._cardId)\r\n        });\r\n        super.setEventListeners();\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupDelete.js?");

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopupWithForm)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithForm extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(popupSelector, { callbackFormSubmit }) {\r\n        super(popupSelector);\r\n        this._callbackFormSubmit = callbackFormSubmit;\r\n        this._popupForm = this._popup.querySelector('.form');\r\n        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));\r\n    }\r\n\r\n\r\n    _getInputValues() {\r\n        const formValues = {};\r\n        this._inputList.forEach(inputItem => {\r\n            formValues[inputItem.name] = inputItem.value;\r\n        });\r\n        return formValues;\r\n    }\r\n\r\n\r\n    setEventListeners() {\r\n        super.setEventListeners();\r\n        this._popupForm.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n            this._callbackFormSubmit(this._getInputValues());\r\n        });\r\n    }\r\n\r\n    close() {\r\n        super.close();\r\n        this._popupForm.reset();\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithForm.js?");

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopupWithImage)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithImage extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(popupSelector) {\r\n        super(popupSelector);\r\n        this._popupImage = document.querySelector('.popup__image');\r\n        this._popupCaption = document.querySelector('.popup__caption');\r\n    }\r\n\r\n    open(name, link) {\r\n        this._popupCaption.textContent = name;\r\n        this._popupImage.src = link;\r\n        this._popupImage.alt = name;\r\n        super.open();\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithImage.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Section)\n/* harmony export */ });\nclass Section {\r\n\r\n    constructor({ renderer }, containerSelector) {\r\n\r\n        this._renderer = renderer;\r\n        this._container = document.querySelector(containerSelector);\r\n    }\r\n\r\n    renderItems(items) {\r\n        items.forEach(this._renderer);\r\n    }\r\n\r\n    addItem(item) {\r\n        this._container.prepend(item);\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/Section.js?");

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserInfo)\n/* harmony export */ });\nclass UserInfo {\r\n\r\n    constructor({ userNameSelector, userStatusSelector, userAvatarSelector }) {\r\n        this._userName = document.querySelector(userNameSelector);\r\n        this._userStatus = document.querySelector(userStatusSelector);\r\n        this._avatarLink = document.querySelector(userAvatarSelector);\r\n    }\r\n\r\n    getUserInfo() {\r\n        const profileData = {\r\n            userName: this._userName.textContent,\r\n            userStatus: this._userStatus.textContent\r\n        }\r\n        return profileData;\r\n    }\r\n\r\n    setUserInfo(profileData) {\r\n        this._userName.textContent = profileData.userName;\r\n        this._userStatus.textContent = profileData.userStatus;\r\n    }\r\n\r\n    setUserAvatar(avatarLink) {\r\n        this._avatarLink.src = avatarLink;\r\n      }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/UserInfo.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ \"./src/components/Card.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ \"./src/components/Section.js\");\n/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ \"./src/components/FormValidator.js\");\n/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ \"./src/components/PopupWithImage.js\");\n/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ \"./src/components/PopupWithForm.js\");\n/* harmony import */ var _components_PopupDelete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupDelete.js */ \"./src/components/PopupDelete.js\");\n/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ \"./src/components/UserInfo.js\");\n/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ \"./src/components/Api.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst popupEditElement = document.querySelector('.popup_type_profile');\r\nconst popupAddElement = document.querySelector('.popup_type_card-add');\r\nconst popupAvatar = document.querySelector('.popup_type_avatar');\r\nconst profileElement = document.querySelector('.profile');\r\n\r\nconst formSubmit = popupEditElement.querySelector('#submit');\r\nconst formCreate = popupAddElement.querySelector('#create');\r\nconst formAvatar = popupAvatar.querySelector('#avatarForm');\r\n\r\nconst popupEditOpenButtonElement = profileElement.querySelector('.profile__edit');\r\nconst popupAddOpenButtonElement = profileElement.querySelector('.profile__add');\r\nconst popupAvatarButtonElement = profileElement.querySelector('.profile__redact');\r\n\r\nconst popupInputInfoName = popupEditElement.querySelector('.popup__input_info_name');\r\nconst popupInputInfoStatus = popupEditElement.querySelector('.popup__input_info_status');\r\n\r\nlet userId;\r\n\r\n//Попап с картинкой\r\nconst popupImageElement = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.popup_type_picture');\r\npopupImageElement.setEventListeners();\r\n\r\n// Информация о пользователе\r\nconst userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\r\n  userNameSelector: '.profile__name',\r\n  userStatusSelector: '.profile__status',\r\n  userAvatarSelector: '.profile__image'\r\n});\r\n\r\n// Создание новой карточки\r\nconst newCard = (cardData) => {\r\n  const newCardItem = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cardData, '#element', userId, { cardId: cardData._id, authorId: cardData.owner._id, }, {\r\n\r\n    handleCardIncrease: (caption, image) => { popupImageElement.open(caption, image) },\r\n\r\n    handleCardPutLike: (cardId) => {\r\n      _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.putCardLike(cardId)\r\n        .then((res) => {\r\n          newCardItem.renderCardLike(res);\r\n        })\r\n        .catch((err) => {\r\n          console.log(`Возникла ошибка при лайке карточки, ${err}`);\r\n        })\r\n    },\r\n\r\n    handleCardRemoveLike: (cardId) => {\r\n      _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.removeCardLike(cardId)\r\n        .then((res) => {\r\n          newCardItem.renderCardLike(res)\r\n        })\r\n        .catch((err) => {\r\n          console.log(`Возникла ошибка при снятии лайка карточки, ${err}`)\r\n        })\r\n    },\r\n\r\n    handleCardDelete: (card, cardId) => {\r\n      popupDeleteCard.open(card, cardId)\r\n    },\r\n  });\r\n  return newCardItem.generateCard();\r\n};\r\n\r\n// Загрузка карточек с сервера\r\nconst cardsSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n  renderer: (cardData) => {\r\n    cardsSection.addItem(newCard(cardData));\r\n  }\r\n}, '.elements');\r\n\r\nPromise.all([_components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.getUserData(), _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.getInitialCards()])\r\n  .then(([userData, cardData]) => {\r\n    userId = userData._id;\r\n    userInfo.setUserInfo({ userName: userData.name, userStatus: userData.about })\r\n    cardsSection.renderItems(cardData.reverse());\r\n    userInfo.setUserAvatar(userData.avatar);\r\n  })\r\n  .catch((err) => {\r\n    console.log(`Возникла ошибка в промис, ${err}`);\r\n  });\r\n\r\n//Попап удаления карточки\r\nconst popupDeleteCard = new _components_PopupDelete_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.popup_type_card-delete', {\r\n  callbackDelete: (card, cardId) => {\r\n    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.deleteCard(cardId)\r\n      .then(() => {\r\n        card.deleteCard();\r\n        popupDeleteCard.close();\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка при удалении карточки, ${err}`)\r\n      })\r\n  }\r\n});\r\npopupDeleteCard.setEventListeners();\r\n\r\n\r\n// Попап редактирования\r\nconst popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.popup_type_profile', {\r\n  callbackFormSubmit: (userData) => {\r\n    popupEditProfile.putSubmitButtonText();\r\n    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.sendUserData(userData)\r\n      .then((res) => {\r\n        userInfo.setUserInfo({ userName: res.name, userStatus: res.about });\r\n        popupEditProfile.close();\r\n      })\r\n      .catch\r\n      ((err) => {\r\n        console.log(`Ошибка при редактировании профиля возникла , ${err}`);\r\n      })\r\n      .finally(() => {\r\n        popupEditProfile.returnSubmitButtonText();\r\n      })\r\n  }\r\n});\r\npopupEditProfile.setEventListeners();\r\n\r\npopupEditOpenButtonElement.addEventListener('click', function () {\r\n  popupEditProfile.open();\r\n  const newUserInfo = userInfo.getUserInfo();\r\n  popupInputInfoName.setAttribute('value', newUserInfo.userName);\r\n  popupInputInfoStatus.setAttribute('value', newUserInfo.userStatus);\r\n});\r\n\r\n// Попап добавления новой карточки\r\nconst popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.popup_type_card-add', {\r\n  callbackFormSubmit: (formValues) => {\r\n    popupAdd.putSubmitButtonText();\r\n    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.addNewCard({\r\n      name: formValues.place,\r\n      link: formValues.image\r\n    })\r\n      .then((card) => {\r\n        cardsSection.addItem(newCard(card));\r\n        popupAdd.close();\r\n      })\r\n      .catch((err) => {\r\n        console.log(`При добавлении карточки возникла ошибка, ${err}`);\r\n      })\r\n      .finally(() => {\r\n        popupAdd.returnSubmitButtonText();\r\n      })\r\n  }\r\n});\r\npopupAdd.setEventListeners();\r\n\r\npopupAddOpenButtonElement.addEventListener('click', function () {\r\n  popupAdd.open();\r\n  validatorNewCard.resetValidation();\r\n});\r\n\r\n// Попап редактирования аватара\r\nconst popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.popup_type_avatar', {\r\n  callbackFormSubmit: (userData) => {\r\n    popupEditAvatar.putSubmitButtonText();\r\n    _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.api.sendAvatarData(userData)\r\n      .then((res) => {\r\n        userInfo.setUserAvatar(res.avatar);\r\n        popupEditAvatar.close();\r\n      })\r\n      .catch((err) => {\r\n        console.log(`Ошибка при обновлении аватара, ${err}`);\r\n      })\r\n      .finally(() => {\r\n        popupEditAvatar.returnSubmitButtonText();\r\n      })\r\n  }\r\n});\r\npopupEditAvatar.setEventListeners();\r\n\r\npopupAvatarButtonElement.addEventListener('click', function () {\r\n  popupEditAvatar.open();\r\n  validatorAvatar.resetValidation();\r\n});\r\n\r\n//Валидация форм\r\nconst validatorNewCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.classListForm, formCreate);\r\nvalidatorNewCard.enableValidation();\r\n\r\nconst validatorUser = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.classListForm, formSubmit);\r\nvalidatorUser.enableValidation();\r\n\r\nconst validatorAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.classListForm, formAvatar);\r\nvalidatorAvatar.enableValidation();\n\n//# sourceURL=webpack://mesto/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classListForm\": () => (/* binding */ classListForm)\n/* harmony export */ });\nconst classListForm = {\r\n    formSelector: '.form',\r\n    inputSelector: '.popup__input',\r\n    submitButtonSelector: '.popup__button',\r\n    inactiveButtonClass: 'popup__button_invalid',\r\n    inputErrorClass: 'popup__error',\r\n    errorClass: 'popup__error_visible'\r\n}\n\n//# sourceURL=webpack://mesto/./src/utils/constants.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;