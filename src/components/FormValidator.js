export default class FormValidator {
    constructor (validationData, formElement) {
        this._inputElement = validationData.inputElement;
        this._submitButton = validationData.submitButton;
        this._inactiveSubmitButton = validationData.inactiveSubmitButton;
        this._inputError = validationData.inputError;
        this._inputErrorMessage = validationData.inputErrorMessage;
        this._inputErrorMessageActive = validationData.inputErrorMessageActive;
        this._formElement = formElement;
        this._button = this._formElement.querySelector(this._submitButton);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputElement));
    }
    //Метод, показывающий ошибку (приватный)
    _showError(inputElement) {
        this._formErrorMessage = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputError);
        this._formErrorMessage.textContent = inputElement.validationMessage;
        this._formErrorMessage.classList.add(this._inputErrorMessageActive);
    }

    //Метод, скрывающий ошибку (приватный)
    _hideError(inputElement) {
        this._formErrorMessage = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputError);
        this._formErrorMessage.textContent = '';
        this._formErrorMessage.classList.remove(this._inputErrorMessageActive);
    }

    //Метод, обобщающий функционал показа/скрытия ошибки на основе валидности поля (приватный)
    _toggleError(inputElement) {
        
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        };
    }

   //Метод, возвращающая не валидные инпуты
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        });
    }

    //Метод, меняюзий состояние кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {        
            this._enableSubmitButton();
        }
    }

    //Метод, анализирующий события, устанвливающий слушатели (приватный)
    _setEventListeners() {

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleError(inputElement);
                this._toggleButtonState();
            });
        });
    }
    
    //Основная валидация (публичный метод)
    enableValidation() {
        this._setEventListeners();
    }
    
    //Метод, сбрасывающий форму (публичный)
    resetFormCondition() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement);
        })
    }

    //Активация кнопки
    _enableSubmitButton() {
        this._button.classList.remove(this._inactiveSubmitButton);
        this._button.removeAttribute('disabled');
    }

    //Деактивация кнопки
    _disableSubmitButton() {
        this._button.setAttribute('disabled', true);
        this._button.classList.add(this._inactiveSubmitButton);
    }
}