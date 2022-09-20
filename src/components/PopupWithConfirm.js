import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector);
        this._button = this._popupElement.querySelector('.popup__submit-btn');
    }

    submitHandler(submitAction) {
        this._handleSubmit = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }
}