//класс попапа редактирвоания профиля
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupElement = document.querySelector(popupSelector)
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__submit-btn');
        this._preloader = this._form.querySelector('.popup__preloader');
    }

    close() {
        this._form.reset();
        super.close();
    }

    //приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        //создаем пустой объект
        this._formValues = {};
        //добавляем в объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        // возвращаем объект значений
        return this._formValues;
    }

    //метод установки прелодера во время загрузки
    renderLoading(isLoading) {
        if(isLoading) {
            this._button.style.display = 'none';
            this._preloader.classList.remove('popup__preloader_inactive');
        } else {
            this._preloader.classList.add('popup__preloader_inactive');
            this._button.style.display = 'block';
        }
    }

    //Перезаписывает родительский метод setEventListeners.
    //Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this._handleFormSubmit(this._getInputValues());
            evt.preventDefault();
        })
    }
}