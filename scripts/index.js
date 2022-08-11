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
    //cardItem,
    popupBigSizeElement,
    popupBigSizeImage,
    popupBigSizeTitle,
    popups,
  } from './global_const.js';

import { Card } from './card.js';

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
    resetFormCondition(selectors);
    enableSubmitButton(popupProfileElement, selectors);
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
    resetFormCondition(selectors);
    disableSubmitButton(popupAddCardElement, selectors);
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};


//function createCard(card) {
    //const cardElement = cardItem.cloneNode(true);

    //const cardLink = cardElement.querySelector('.element__image');
    //cardElement.querySelector('.element__place').textContent = card.name;
    //cardLink.src = card.link;
    //cardLink.alt = card.name;

    //cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    //    const card = evt.target;
    //    card.classList.toggle('element__like-btn_active');
    //});

//    cardElement.querySelector('.element__trash-btn').addEventListener('click', function () {
//        cardElement.remove();
//    });

    //cardElement.querySelector('.element__image').addEventListener('click', function () {
    //    openPopup(popupBigSizeElement);
    //    popupBigSizeImage.src = card.link;
    //    popupBigSizeTitle.textContent = card.name;
    //    popupBigSizeImage.alt = card.name;
    //});

//    return cardElement;
//};

//function createCard (card) {
//    const card = new Card(card, templateSelector);
//    return card.generateCard();
//  }

//function createCard (card) {
//    const cardElement = new Card (card, templateSelector, handleCardClick);
//    return cardElement;
//}

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
        const card = new Card(item, '#element-card');
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

const closeBigSizedCard = function () {
    closePopup(popupBigSizeElement);
}

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