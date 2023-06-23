export default class FormValidator {

    constructor(params, formElement) {
        this._params = params;
        this._formSelector = params.formSelector;
        this._inputSelector = params.inputSelector;
        this._submitButtonSelector = params.submitButtonSelector;
        this._inactiveButtonClass = params.inactiveButtonClass;
        this._inputErrorClass = params.inputErrorClass;
        this._errorClass = params.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._button = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputItem, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`);
        inputItem.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        inputItem.classList.add(this._errorClass);
    }

    _hideInputError(inputItem) {
        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`);
        inputItem.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        inputItem.classList.remove(this._errorClass);
    }

    _isValid(inputItem) {
        if (!inputItem.validity.valid) {
            this._showInputError(inputItem, inputItem.validationMessage);
        } else {
            this._hideInputError(inputItem);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    _toggleButton = () => {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.disabled = false;
        }
    }

    resetValidation() {
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        })
        this._toggleButton();
    }

    _setEventListener() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input);
                this._toggleButton();
            });
        });
        this._formElement.addEventListener('reset', () => {
            this._toggleButton();
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', function (event) {
            event.preventDefault();
        });
        this._setEventListener();
        this.resetValidation();
    }
}