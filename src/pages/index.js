import { initialCards, 
    popupProfileFormElement,
    profileName,
    profileDescription,
    profileNameInput,
    profileDescriptionInput, 
    profileEditButton,
    profileAddButton,
    popupAddCardForm
  } from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import { validationData } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import './index.css'
import { renderElements } from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';

//создаем дефолтные карточки
export const initialCardList = new Section({ 
    items: initialCards, 
    renderer: renderElements 
}, '.elements__container');

initialCardList.renderItems();

//создаем экземпляр класса попапа с картинкой
export const fullSizeImage = new PopupWithImage('.popup_type_size');

//вызываем метод, чтобы закрывать картинку с помощью крестика и клика по оверлею
fullSizeImage.setEventListeners();

//создаем экземпляр класса PopupWithForm, чтобы создавать новые карточки
const formAddCard = new PopupWithForm('.popup_type_card',renderElements);

//вешаем слушатель сабмита формы
formAddCard.setEventListeners();

//создаем экземпляр класса UserInfo
const userData = new UserInfo({
    userName: '.profile__name',
    userJob: '.profile__description'
})

//создаем экземпляр класса PopupWithForm, чтобы редактировать данные пользователя
const profileEditForm = new PopupWithForm(
    '.popup_type_profile',
    (item) => {
        userData.setUserInfo(item);
        profileEditForm.close();
})

//вешаем слушатель сабмита
profileEditForm.setEventListeners();

//создаем экземпляр класса FormValidator для запуска валидации на форме добавления карточки
const popupAddCardFormCheckValid = new FormValidator(validationData, popupAddCardForm);

popupAddCardFormCheckValid.enableValidation();

//создаем экземпляр класса FormValidator для запуска валидации на форме редактирования профиля
const popupProfileFormElementChekValid = new FormValidator(validationData, popupProfileFormElement);

popupProfileFormElementChekValid.enableValidation();

//открываем попап редактирования профиля
profileEditButton.addEventListener('click', () => {
    popupProfileFormElementChekValid.resetFormCondition()
    profileEditForm.open();
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
});

//открываем попап добавления карточки
profileAddButton.addEventListener('click', () => {
    popupAddCardFormCheckValid.resetFormCondition();
    formAddCard.open();
});