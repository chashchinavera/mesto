const forms = [...document.querySelectorAll('.form')];
const inputs = [...document.querySelectorAll('.popup__input')];


const checkInputValidity = (input, restConfig) => {
    const error = document.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
        error.textContent = '';
        input.classList.remove(restConfig.errorClass);


    } else {
        error.textContent = input.validationMessage;
        input.classList.add(restConfig.errorClass);
    }
}


const toggleButton = (inputs, button, restConfig) => {
    const isFormValid = inputs.every(input => input.validity.valid)
    if (isFormValid) {
        button.classList.remove(restConfig.inactiveButtonClass);
        button.disabled = '';
    } else {
        button.classList.add(restConfig.inactiveButtonClass);
        button.disabled = 'disabled';
    }
}


const enableValidation = (config) => {
    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;
    
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })

        inputs.forEach(input => {
            input.addEventListener('input', () => {

                checkInputValidity(input, restConfig);

                toggleButton(inputs, button, restConfig);

            })
        })
    })

}

const config = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_visible'
}