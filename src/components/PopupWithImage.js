import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._container = document.querySelector(popupSelector);
        this._image = this._container.querySelector('.popup__image');
        this._place = this._container.querySelector('.popup__subtitle');
    }

    open(name, link) {
        this._image.src = link;
        this._place.textContent = name;
        this._image.alt = name;
        super.open();
    }
}