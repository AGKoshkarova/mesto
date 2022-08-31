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

const openProfilePopup = function () {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    openPopup(popupProfileElement);
    popupProfileFormElementChekValid.resetFormCondition();
    //popupProfileFormElementChekValid.enableSubmitButton();
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
    popupAddCardFormCheckValid.resetFormCondition();
    //popupAddCardFormCheckValid.disableSubmitButton();
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};

const handleCardClick = function (name, link) {
    //openPopup(popupBigSizeElement);
    

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