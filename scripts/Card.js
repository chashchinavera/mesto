import Renderable from "./Renderable.js";

export default class Card extends Renderable {

    static selectors = {
        template: '#element',
        element: '.element',
        imageButton: '.element__button',
        image: '.element__image',
        deleteButton: '.element__delete',
        name: '.element__title',
        likeButton: '.element__like'
    }

    constructor(item) {
        super(Card.selectors.template);

        this._name = item.name;
        this._link = item.link;

        this.generateCard();
    }

    _getTemplate(templateSelector) {
        return document
            .querySelector(templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _deleteCard() {
        this._element.remove();
    }

    _likeCard() {
        this._likeButton.classList.toggle('element__like_active');
    }

    _openPopup() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupCaption.textContent = this._name;

        openModalWindow(popupImageElement);
    }

    generateCard() {
        this._element = this._getTemplate(Card.selectors.template);
        this._element.querySelector(Card.selectors.name).textContent = this._name;
        this._element.querySelector(Card.selectors.image).src = this._link;
        this._element.querySelector(Card.selectors.image).alt = this._name;
        this._likeButton = this._element.querySelector(Card.selectors.likeButton);
        this._element.querySelector(Card.selectors.deleteButton).addEventListener('click', () => this._deleteCard());
        this._element.querySelector(Card.selectors.likeButton).addEventListener('click', () => this._likeCard());
        this._element.querySelector(Card.selectors.imageButton).addEventListener('click', () => this._openPopup());
        return this._element;
    }
}
