//Класс, который отвечает за открытие и закрытие попапа

export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //публичные методы open 
    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add('popup_opened');
    }

    //и close, которые отвечают за открытие и закрытие попапа
    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.remove('popup_opened')
    }

    //приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          this.close();
        }
    }

    //публичный метод setEventListeners, 
    //который добавляет слушатель клика иконке закрытия попапа. 
    //Модальное окно также закрывается при клике на затемнённую область вокруг формы
    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
                this.close();
            }
        })
    }
}