import Popup from './Popup.js';

export default class PopupDelete extends Popup {

    constructor(popupSelector, { callbackDelete }) {
        super(popupSelector);

        this._submitButton = this._popup.querySelector('.form');
        this._callbackDelete = callbackDelete;
    }

    open(card, cardId) {
        this._card = card;
        this._cardId = cardId;
        super.open();
    }

    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._callbackDelete(this._card, this._cardId)
        });
        super.setEventListeners();
    }
}