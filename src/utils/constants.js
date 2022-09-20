export const initialCards = [
    {
      name: 'Париж',
      link: parisImage
    },
    {
      name: 'Нью-Йорк',
      link: newYorkImage
    },
    {
      name: 'Рим',
      link: romeImage
    },
    {
      name: 'Лондон',
      link: londonImage
    },
    {
      name: 'Берлин',
      link: berlinImage
    },
    {
      name: 'Амстердам',
      link: amsterdamImage
    }
  ];

import parisImage from '../images/paris.jpg';
import newYorkImage from '../images/new-york_opt.jpeg';
import romeImage from '../images/rome_opt.jpeg';
import londonImage from '../images/london_opt.jpeg';
import berlinImage from '../images/berlin_opt.jpeg';
import amsterdamImage from '../images/amsterdam_opt.jpeg';

export const popupProfileElement = document.querySelector('.popup_type_profile');
export const popupProfileFormElement = popupProfileElement.querySelector('.popup__form_type_profile');
export const popupProfileSubmitButton = popupProfileElement.querySelector('#profile-submit');
  
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileNameInput = document.querySelector('.popup__input_type_name');
export const profileDescriptionInput = document.querySelector('.popup__input_type_description');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const profileAddButton = document.querySelector('.profile__add-btn');
  
export const popupAddCardElement = document.querySelector('.popup_type_card');
export const popupAddCardForm = popupAddCardElement.querySelector('.popup__form_type_card');
export const popupAddCardNameInput = popupAddCardElement.querySelector('.popup__input_type_place-name');
export const popupAddCardLinkInput = popupAddCardElement.querySelector('.popup__input_type_link');
export const popupAddCardSubmitButton = popupAddCardElement.querySelector('.popup__submit-btn');
  
export const cardsContainer = document.querySelector('.elements__container');
export const cardTemplate = document.querySelector('#element-card');
const cardItem = cardTemplate.content.querySelector('.element');
  
export const popupBigSizeElement = document.querySelector('.popup_type_size');
export const popupBigSizeImage = popupBigSizeElement.querySelector('.popup__image');
export const popupBigSizeTitle = popupBigSizeElement.querySelector('.popup__subtitle'); 
  
export const popups = document.querySelectorAll('.popup');

export const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupAvatarInput = popupAvatar.querySelector('.popup__input_type_avatar');
export const popupAvatarForm = popupAvatar.querySelector('.popup__form_type_avatar');
export const popupAvatarSubmitButton = popupAvatar.querySelector('.popup__submit-btn');

export const profileAvatarButton = document.querySelector('.profile__avatar-btn');
export const profileAvatar = document.querySelector('.profile__avatar');

//export const popupDeleteCard = document.querySelector('.popup_type_delete')
//export const deleteButton = cardItem.querySelector('.element__trash-btn');

const selectors = {
  inputElement: '.popup__input',
  form: '.popup__form',
  submitButton: '.popup__submit-btn',
  inactiveSubmitButton: 'popup__submit-btn_disabled',
  inputError: 'popup__input_type_error',
  inputErrorMessage: '.popup__input-error',
  inputErrorMessageActive: 'popup__input-error_active',
}

export {selectors as validationData};

