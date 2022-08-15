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

const popupProfileElement = document.querySelector('.popup_type_profile');
const popupProfileFormElement = popupProfileElement.querySelector('.popup__form_type_profile');
const popupProfileSubmitButton = popupProfileElement.querySelector('#profile-submit');
  
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

export {initialCards, 
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
  popups
  };

const selectors = {
  inputElement: '.popup__input',
  formElement: '.popup__form',
  submitButton: '.popup__submit-btn',
  inactiveSubmitButton: 'popup__submit-btn_disabled',
  inputError: 'popup__input_type_error',
  inputErrorMessage: '.popup__input-error',
  inputErrorMessageActive: 'popup__input-error_active',
}

export {selectors as validationData};

