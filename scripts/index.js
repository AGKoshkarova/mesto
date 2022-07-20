const popupElement = document.querySelector('.popup');

const popupProfileElement = document.querySelector('.popup_type_profile');
const popupProfileFormElement = popupProfileElement.querySelector('.popup__form_type_profile');
const popupProfileSubmitButton = popupProfileElement.querySelector('.popup__sumbit-btn');
const popupProfileCloseButton =  popupProfileElement.querySelector('.popup__close-btn');

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
const popupAddCardCloseButton = popupAddCardElement.querySelector('.popup__close-btn');
const popupAddCardSubmitButton = popupAddCardElement.querySelector('.popup__sumbit-btn');

const cardTemplate = document.querySelector('#element-card');
const cardsContainer = document.querySelector('.elements__container');

const popupBigSizeElement = document.querySelector('.popup_type_size');
const popupBigSizeImage = popupBigSizeElement.querySelector('.popup__image');
const popupBigSizeTitle = popupBigSizeElement.querySelector('.popup__subtitle');
const popupBigSizeCloseButton = popupBigSizeElement.querySelector('.popup__close-btn');

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
    popupElement.classList.add('popup_opened');
};

const closePopup = function (popupElement) {
    popupElement.classList.remove('popup_opened');
};

const openProfilePopup = function  () {
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

    closePopup();
};

const openAddCardPopup = function () {
    popupAddCardForm.reset();
    openPopup(popupAddCardElement);
};

const closeAddCardPopup = function () {
    closePopup(popupAddCardElement);
};

profileEditButton.addEventListener('click', openProfilePopup);
popupProfileCloseButton.addEventListener('click', closeProfilePopup);
popupProfileFormElement.addEventListener('submit', popupProfileFormSubmitHandler);
profileAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);


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


popupAddCardForm.addEventListener('submit', addNewCard);
popupBigSizeCloseButton.addEventListener('click', closeBigSizedCard);


createInitialCards();
