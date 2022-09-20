import PopupWithForm from "./PopupWithForm";

export default class PopupWithAvatar extends PopupWithForm {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector, handleFormSubmit);
        this._handleFormSubmit = handleFormSubmit;
        this._popup = document.querySelector(popupSelector)
        this._form = this._popup.querySelector('.popup__form');
        this._input = this._form.querySelector('.popup__input');
        this._button = this._form.querySelector('.popup__submit-btn');
    }

    setEventListeners() {
        super.setEventListeners()
        this._button.addEventListener('submit', () => {
            this._handleFormSubmit();
        })
    }
}