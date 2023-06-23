export default class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupButton = this._popup.querySelector('.popup__button');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    putSubmitButtonText() {
        this._popupButton.textContent = 'Сохранение...';
    }

    returnSubmitButtonText() {
        this._popupButton.textContent = 'Сохранить';
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}

