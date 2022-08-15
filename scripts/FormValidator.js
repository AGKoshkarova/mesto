export class FormValidator {
    constructor (validationData, formSelector) {
        this._inputElement = validationData.inputElement;
        this._formElement = validationData.formElement;
        this._submitButton = validationData.submitButton;
        this._inactiveSubmitButton = validationData.inactiveSubmitButton;
        this._inputError = validationData.inputError;
        this._inputErrorMessage = validationData.inputErrorMessage;
        this._inputErrorMessageActive = validationData.inputErrorMessageActive;
        this._formSelector = formSelector;
    }
    //Метод, показывающий ошибку (приватный)
    _showError(inputElement) {
        this._formErrorMessage = this._formSelector.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputError);
        this._formErrorMessage.textContent = inputElement.validationMessage;
        this._formErrorMessage.classList.add(this._inputErrorMessageActive);
    }

    //Метод, скрывающий ошибку (приватный)
    _hideError(inputElement) {
        this._formErrorMessage = this._formSelector.querySelector(`.${inputElement.id}-error`);
        console.log(this._formElement);
        inputElement.classList.remove(this._inputError);
        this._formErrorMessage.textContent = '';
        this._formErrorMessage.classList.remove(this._inputErrorMessageActive);
    }

    //Метод, обобщающий функционал показа/скрытия ошибки на основе валидности поля (приватный)
    _isValid(inputElement) {
        
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        };
    }

   //Метод, возвращающая не валидные инпуты
    _hasInvalidInput() {
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputElement));
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        });
    }

    //Метод, меняюзий состояние кнопки
    _toggleButtonState() {
        const submitButton = this._formSelector.querySelector(this._submitButton);
    
        if (this._hasInvalidInput()) {
            submitButton.setAttribute('disabled', true);
            submitButton.classList.add(this._inactiveSubmitButton);
        } else {        
            submitButton.classList.remove(this._inactiveSubmitButton);
            submitButton.removeAttribute('disabled');
        }
    }
    //Метод, анализирующий события, устанвливающий слушатели (приватный)
    _setEventListeners() {

        this._toggleButtonState();
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputElement));

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
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

        this._inputs = Array.from(this._formSelector.querySelectorAll(this._inputElement));
        this._inputs.forEach((inputElement) => {
            this._hideError(inputElement);
        })
    }
}