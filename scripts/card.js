export class Card {
    constructor(card, templateSelector, handleCardClick) {
        this._link = card.link;
        this._name = card.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeneres();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__place').textContent = this._name;
        this._element.querySelector('.element__place').alt = this._name;

        return this._element;
    }

    _setEventListeneres() {
        this._element.querySelector('.element__like-btn').addEventListener('click', () => {
            this._handleLike();
        })
        this._element.querySelector('.element__trash-btn').addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }

    _handleLike() {
        const button = this._element.querySelector('.element__like-btn');
        button.classList.toggle('element__like-btn_active');
    }

    _handleDeleteCard() {
        this._element = null;
    }
}