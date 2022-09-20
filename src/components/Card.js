export default class Card {
    constructor({ card, handleCardClick, userID, handleDeleteCardIcon, handleLikeClick}, templateSelector) {
        this._link = card.link;
        this._name = card.name;
        this._likes = card.likes;
        this._id = card._id;
        this._ownerID = card.owner._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._userID = userID;
        this._handleDeleteCardIcon = handleDeleteCardIcon;
        this._handleLikeClick = handleLikeClick;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__image');
        this._place = this._element.querySelector('.element__place');
        this._likeCounter = this._element.querySelector('.element__like-counter');
        this._deleteButton = this._element.querySelector('.element__trash-btn');
        this._likeButton = this._element.querySelector('.element__like-btn');
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
        this._handleDeleteIcon();
        this.setLikes(this._likes);

        this._image.src = this._link;
        this._place.textContent = this._name;
        this._image.alt = this._name;

        this._setEventListeneres();
        return this._element;
    }

    _setEventListeneres() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick(this._id);
        })
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCardIcon();
        });
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }

    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    //метод для отображения лайков
    setLikes(newCount) {
        this._likes = newCount; // записали в переменную, чтобы в ней лежали актуальные данные о лайках
        this._updateLikesCount(newCount);
        this._checkLikeStatus();
    }

    //метод для удаления иконки удаления с чужих карточек
    _handleDeleteIcon() {
        if (this._ownerID !== this._userID) {
            this._deleteButton.classList.add('element__trash-btn_disabled');
        }
    }

    isLiked() {
        return this._likes.find((element) => element._id === this._userID);
    }

    // метод, обновляющий число лайков
    _updateLikesCount(newCount) {
        this._likeCounter.textContent = newCount.length;
    }

    _checkLikeStatus() {
        if (this.isLiked()) {
            this._likeButton.classList.add('element__like-btn_active');
        } else {
            this._likeButton.classList.remove('element__like-btn_active');
        }
    }
}