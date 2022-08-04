const popupProfileElement = document.querySelector('.popup_type_profile');
const popupProfileFormElement = popupProfileElement.querySelector('.popup__form_type_profile');
const popupProfileSubmitButton = popupProfileElement.querySelector('.popup__submit-btn');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileDescriptionInput = document.querySelector('.popup__input_type_description');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');

const popupAddCardElement = document.querySelector('.popup_type_card');
const popupAddCardForm = popupAddCardElement.querySelector('.popup__form_type_card');
const popupAddCardNameInput = popupAddCardElement.querySelector('.popup__input_type_place-name');
const popupAddCardLinkInput = popupAddCardElement.querySelector('.popup__input_type_link');
const popupAddCardSubmitButton = popupAddCardElement.querySelector('.popup__submit-btn');

const cardsContainer = document.querySelector('.elements__container');
const cardTemplate = document.querySelector('#element-card');
const cardItem = cardTemplate.content.querySelector('.element');

const popupBigSizeElement = document.querySelector('.popup_type_size');
const popupBigSizeImage = popupBigSizeElement.querySelector('.popup__image');
const popupBigSizeTitle = popupBigSizeElement.querySelector('.popup__subtitle'); 

const popups = document.querySelectorAll('.popup');

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

const openProfilePopup = function  () {

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
    enableSubmitButton(popupAddCardElement, selectors);
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};


function createCard(card) {
    const cardElement = cardItem.cloneNode(true);

    const cardLink = cardElement.querySelector('.element__image');
    cardElement.querySelector('.element__place').textContent = card.name;
    cardLink.src = card.link;
    cardLink.alt = card.name;

    cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
        const card = evt.target;
        card.classList.toggle('element__like-btn_active');
    });

    cardElement.querySelector('.element__trash-btn').addEventListener('click', function () {
        cardElement.remove();
    });

    cardElement.querySelector('.element__image').addEventListener('click', function () {
        openPopup(popupBigSizeElement);
        popupBigSizeImage.src = card.link;
        popupBigSizeTitle.textContent = card.name;
        popupBigSizeImage.alt = card.name;
    });

    return cardElement;
};


function createInitialCards () {
    initialCards.forEach(function (cardElement) {
        cardsContainer.prepend(createCard(cardElement));   
    });
};

function addNewCard(evt) {
    evt.preventDefault();
    const newCard = createCard({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value});
    cardsContainer.prepend(newCard);

    closeAddCardPopup();
};

function closeBigSizedCard () {
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