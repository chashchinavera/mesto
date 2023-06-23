export default class Card {

    static selectors = {
        template: '#element',
        element: '.element',
        imageButton: '.element__button',
        image: '.element__image',
        deleteButton: '.element__delete',
        name: '.element__title',
        likeButton: '.element__like_button',
        likeButtonActive: 'element__like_active',
        likeCounter: '.element__like_counter'
    }

    constructor(cardData, selectors, userId, authorData, handleActions) {
        this._cardData = cardData;
        this._name = cardData.name;
        this._link = cardData.link;
        this._id = cardData.id;
        this.templateSelector = selectors;
        this._handleCardIncrease = handleActions.handleCardIncrease;
        this._putLike = handleActions.handleCardPutLike;
        this._removeLike = handleActions.handleCardRemoveLike;
        this._cardDelete = handleActions.handleCardDelete;
        this._userId = userId;
        this._cardId = authorData.cardId;
        this._authorId = authorData.authorId;
    }


    _getTemplate() {
        return document
            .querySelector(this.templateSelector)
            .content
            .querySelector(Card.selectors.element)
            .cloneNode(true);
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    renderCardLike(card) {
        this._likePlace = card.likes;
        if (this._likePlace.length === 0) {
            this.likeCounter.textContent = '';
        } else {
            this.likeCounter.textContent = this._likePlace.length;
        }
        if (this._isLiked()) {
            this._likeButton.classList.add(Card.selectors.likeButtonActive);
        } else {
            this._likeButton.classList.remove(Card.selectors.likeButtonActive);
        }
    }

    _isLiked() {
        return this._likePlace.find((userLike) => userLike._id === this._userId);
    }

    _toggleLike() {
        if (this._isLiked()) {
            this._removeLike(this._cardId);
        } else {
            this._putLike(this._cardId);
        }
    }

    _setEventListeners() {
        this._deleteButton = this._element.querySelector(Card.selectors.deleteButton);
        if (this._userId === this._authorId) {
            this._deleteButton.addEventListener('click', () =>  this._cardDelete(this, this._cardId));
          } else {
            this._deleteButton.remove();
          }
        this._likeButton.addEventListener('click', () => this._toggleLike());
        this._element.querySelector(Card.selectors.imageButton).addEventListener('click', () => this._handleCardIncrease(this._name, this._link));
    }


    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(Card.selectors.name).textContent = this._name;
        this._image = this._element.querySelector(Card.selectors.image);
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likeButton = this._element.querySelector(Card.selectors.likeButton);
        this.likeCounter = this._element.querySelector(Card.selectors.likeCounter);
        this.renderCardLike(this._cardData);
        this._setEventListeners();
        return this._element;
    }
}