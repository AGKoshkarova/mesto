import { initialCards, 
    popupProfileElement, 
    popupProfileFormElement,
    popupProfileSubmitButton,
    profileName,
    profileDescription,
    profileNameInput,
    profileDescriptionInput, 
    profileEditButton,
    profileAddButton,
    popupAddCardElement,
    popupAddCardForm,
    popupAddCardNameInput,
    popupAddCardLinkInput,
    popupAddCardSubmitButton,
    cardsContainer,
    popupBigSizeElement,
    popupBigSizeImage,
    popupBigSizeTitle,
    popups,
  } from './global_const.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationData } from './global_const.js';

const openPopup = function (popupElement) {
    document.addEventListener('keydown', closePopupWidthEscape);
    popupElement.classList.add('popup_opened');
};

const closePopup = function (popupElement) {
    document.removeEventListener('keydown', closePopupWidthEscape);
    popupElement.classList.remove('popup_opened')
};

const closePopupWidthEscape = function (evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function enableSubmitButton () {
    popupProfileSubmitButton.classList.remove('popup__submit-btn_disabled');
    popupProfileSubmitButton.removeAttribute('disabled');
}

function disableSubmitButton () {
    popupAddCardSubmitButton.classList.add('popup__submit-btn_disabled');
    popupAddCardSubmitButton.setAttribute('disabled', true);
}

const openProfilePopup = function () {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    openPopup(popupProfileElement);
    enableSubmitButton(popupProfileElement) //selectors);
    popupProfileFormElementChekValid.resetFormCondition();
};

const closeProfilePopup = function () {
    closePopup(popupProfileElement);
};

function popupProfileFormSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;

    closeProfilePopup();
};

const openAddCardPopup = function () {
    popupAddCardForm.reset();
    openPopup(popupAddCardElement);
    disableSubmitButton(popupAddCardElement)//, selectors);
    popupAddCardFormCheckValid.resetFormCondition();
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};

//функция открытия попапа с картинкой

const handleCardClick = function (name, link) {
    openPopup(popupBigSizeElement);

    popupBigSizeImage.src = link;
    popupBigSizeTitle.textContent = name;
    popupBigSizeImage.alt = name;
}

//функция создания дефолтных карточек

function createInitialCards () {
    initialCards.forEach((item) => {
        const card = new Card(item, '#element-card', handleCardClick);
        const cardElement = card.generateCard();
    
        cardsContainer.prepend(cardElement);
    });
};

//функция создания карточек

function createCard (item) {
    const card = new Card(item, "#element-card", handleCardClick);
    const newCard = card.generateCard();  
    return newCard;
}

//функция добавления новых карточек

function addNewCard(evt) {
    evt.preventDefault();
    const newCard = createCard({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value});
    cardsContainer.prepend(newCard);

    closeAddCardPopup();
};

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
            closePopup(popup);
        }
    })
})

createInitialCards();

profileEditButton.addEventListener('click', openProfilePopup);
popupProfileFormElement.addEventListener('submit', popupProfileFormSubmitHandler);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardForm.addEventListener('submit', addNewCard);

const popupAddCardFormCheckValid = new FormValidator(validationData, popupAddCardForm);

popupAddCardFormCheckValid.enableValidation();

const popupProfileFormElementChekValid = new FormValidator(validationData, popupProfileFormElement);

popupProfileFormElementChekValid.enableValidation();