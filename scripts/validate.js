//функция, показывающая ошибку

function showError (inputElement, formElement, errorMessage) {

    const FormErrorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(FormErrorMessage);
    inputElement.classList.add('popup__input_type_error');
    FormErrorMessage.textContent = errorMessage;
    FormErrorMessage.classList.add('popup__input-error_active');
}

//функция, скрывающая ошибку

function hideError (inputElement, formElement) {

    const FormErrorMessage = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(FormErrorMessage);
    inputElement.classList.remove('popup__input_type_error');
    FormErrorMessage.textContent = '';
    FormErrorMessage.classList.remove('popup__input-error_active');
}

//функция, проверяющая валидность

function isValid (inputElement, formElement) {

    if (!inputElement.validity.valid) {
        showError(inputElement, formElement, inputElement.validationMessage);
    } else {
        hideError(inputElement, formElement);
    };

}

//функция-обработчик сразу всех полей 

function setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(inputElement, formElement);
            toggleButtonState(formElement);
        });
    });
    
}

//функция для перебора всех форм 

function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

   formList.forEach((formElement) => {
        setEventListeners(formElement);
   });
}


//функция, блокирующая кнопку сабмита

function toggleButtonState (formElement) {
    const submitButton = formElement.querySelector('.popup__submit-btn');
    const validity = formElement.checkValidity();

    if (validity) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('popup__submit-btn_disabled');
    } else {        
        submitButton.classList.add('popup__submit-btn_disabled');
        submitButton.setAttribute('disabled', true);
    }
}

enableValidation();