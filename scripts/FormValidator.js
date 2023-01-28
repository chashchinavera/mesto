export default class FormValidator {
    constructor(config) {
        this._config = config;
    }

    _checkInputValidity = (input, restConfig) => {
        const error = document.querySelector(`#${input.id}-error`);
        if (input.validity.valid) {
            error.textContent = '';
            input.classList.remove(restConfig.errorClass);
        } else {
            error.textContent = input.validationMessage;
            input.classList.add(restConfig.errorClass);
        }
    }

    _toggleButton = (inputs, button, restConfig) => {
        const isFormValid = inputs.every(input => input.validity.valid);
        if (isFormValid) {
            button.classList.remove(restConfig.inactiveButtonClass);
            button.disabled = '';
        } else {
            button.classList.add(restConfig.inactiveButtonClass);
            button.disabled = 'disabled';
        }
    }

    enableValidation() {
        const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = this._config;
        const forms = [...document.querySelectorAll(formSelector)];

        forms.forEach(form => {
            const inputs = [...form.querySelectorAll(inputSelector)];
            const button = form.querySelector(submitButtonSelector);

            inputs.forEach(input => {
                input.addEventListener('input', () => {

                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                    })

                    this._checkInputValidity(input, restConfig);

                    this._toggleButton(inputs, button, restConfig);
                })
            })
        })
    }
}