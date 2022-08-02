const popupElement = document.querySelector('.popup');

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

const cardTemplate = document.querySelector('#element-card');
const cardsContainer = document.querySelector('.elements__container');

const popupBigSizeElement = document.querySelector('.popup_type_size');
const popupBigSizeImage = popupBigSizeElement.querySelector('.popup__image');
const popupBigSizeTitle = popupBigSizeElement.querySelector('.popup__subtitle');

const initialCards = [
    {
      name: 'Париж',
      link: './images/paris.jpg'
    },
    {
      name: 'Нью-Йорк',
      link: './images/new-york_opt.jpeg'
    },
    {
      name: 'Рим',
      link: './images/rome_opt.jpeg'
    },
    {
      name: 'Лондон',
      link: './images/london_opt.jpeg'
    },
    {
      name: 'Берлин',
      link: './images/berlin_opt.jpeg'
    },
    {
      name: 'Амстердам',
      link: './images/amsterdam_opt.jpeg'
    }
  ];   

const openPopup = function (popupElement) {
    document.addEventListener('keydown', closePopupWidthEscape);
    popupElement.classList.add('popup_opened');
    clearPopup();
};

const closePopup = function (popupElement) {
    document.removeEventListener('keydown', closePopupWidthEscape);
    popupElement.classList.remove('popup_opened')
};

const closePopupWidthEscape = function (evt) {
    const popupOpened = document.querySelector('.popup_opened');

    if (evt.key === 'Escape') {
        closePopup(popupOpened);
    }
}

const openProfilePopup = function  () {
    popupProfileSubmitButton.removeAttribute('disabled');
    popupProfileSubmitButton.classList.remove('popup__submit-btn_disabled');

    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    openPopup(popupProfileElement);

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
    popupAddCardSubmitButton.classList.add('popup__submit-btn_disabled');
    popupAddCardSubmitButton.setAttribute('disabled', true);

    popupAddCardForm.reset();
    openPopup(popupAddCardElement);
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};

profileEditButton.addEventListener('click', openProfilePopup);
popupProfileFormElement.addEventListener('submit', popupProfileFormSubmitHandler);
profileAddButton.addEventListener('click', openAddCardPopup);


function createCard(card) {
    const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__place').textContent = card.name;
    cardElement.querySelector('.element__image').src = card.link;
    cardElement.querySelector('.element__image').alt = card.name;

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

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
            closePopup(popup)
        }
    })
})

function clearPopup () {
    const spans = Array.from(document.querySelectorAll('.popup__input-error'));

    spans.forEach((spanElement) => {
        spanElement.textContent = '';
    })

    const inputs = Array.from(document.querySelectorAll('.popup__input'));

    inputs.forEach((inputElement) => {
        inputElement.classList.remove('popup__input_type_error');
    })
}


popupAddCardForm.addEventListener('submit', addNewCard);


createInitialCards();