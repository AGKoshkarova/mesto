const selectors = {
    inputElement: '.popup__input',
    formElement: '.popup__form',
    submitButton: '.popup__submit-btn ',
    inactiveSubmitButton: 'popup__submit-btn_disabled',
    inputError: 'popup__input_type_error',
    inputErrorMessage: '.popup__input-error',
    inputErrorMessageActive: 'popup__input-error_active',
}

//функция, показывающая ошибку

function showError (evt, formElement, errorMessage, config) {
    const inputElement = evt.target;
    const formErrorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputError);
    formErrorMessage.textContent = errorMessage;
    formErrorMessage.classList.add(config.inputErrorMessageActive);
}

//функция, скрывающая ошибку

function hideError (evt, formElement, config) {
    const inputElement = evt.target;
    const formErrorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputError);
    formErrorMessage.textContent = '';
    formErrorMessage.classList.remove(config.inputErrorMessageActive);
}

//функция, проверяющая валидность

function isValid (evt, inputElement, formElement, config) {

    if (!inputElement.validity.valid) {
        showError(evt, formElement, inputElement.validationMessage, config);
    } else {
        hideError(evt, formElement, config);
    };

}

//функция-обработчик сразу всех полей 

function setEventListeners (config, formElement) {
    const inputs = formElement.querySelectorAll(config.inputElement);
    const inputList = Array.from(inputs);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            isValid(evt, inputElement, formElement, config);
            toggleButtonState(formElement, config);
       });
   });
    
}

//функция для перебора всех форм 

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formElement));
  
    formList.forEach((formElement) => {
        setEventListeners(config, formElement);
    });
  }


//функция, блокирующая кнопку сабмита

function toggleButtonState (formElement, config) {
    const submitButton = formElement.querySelector(config.submitButton);
    const validity = formElement.checkValidity();

    if (validity) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove(config.inactiveSubmitButton);
    } else {        
        submitButton.classList.add(config.inactiveSubmitButton);
        submitButton.setAttribute('disabled', true);
    }
}


function resetFormCondition (config) {
    const formList = Array.from(document.querySelectorAll(config.formElement));
    
    formList.forEach((formElement) => {
        const spans = Array.from(formElement.querySelectorAll(config.inputErrorMessage));
        spans.forEach((spanElement) => {
            spanElement.textContent = '';
            spanElement.classList.remove(config.inputErrorMessageActive);
        })

        const inputs = Array.from(formElement.querySelectorAll(config.inputElement));
        inputs.forEach((inputElement) => {
            inputElement.classList.remove(config.inputError);
        })
    });
}

function enableSubmitButton (popup, config) {
    if (popup.classList.contains('popup_type_profile') && popup.classList.contains('popup_opened')) {
        popupProfileSubmitButton.removeAttribute('disabled');
        popupProfileSubmitButton.classList.remove(config.inactiveSubmitButton);
    }
    else if (popup.classList.contains('popup_type_card') && popup.classList.contains('popup_opened')) {
        popupAddCardSubmitButton.classList.add(config.inactiveSubmitButton);
        popupAddCardSubmitButton.setAttribute('disabled', true);
    }
}

enableValidation(selectors);