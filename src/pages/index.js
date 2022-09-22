import { popupProfileFormElement,
    profileName,
    profileDescription,
    profileNameInput,
    profileDescriptionInput, 
    profileEditButton,
    profileAddButton,
    popupAddCardForm,
    deleteButton, 
    popupAvatar,
    popupAvatarSubmitButton,
    profileAvatarButton,
    popupAvatarForm, 
    popupAvatarInput,
    profileAvatar
  } from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import { validationData } from '../utils/constants.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import './index.css';
import { createCard } from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithAvatar from '../components/PopupWithAvatar.js';

//запрос на сервер
export const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-50/",
    headers: {
        'content-type': 'application/json',
        authorization: 'e53308b2-3f61-4379-8ee7-a33c421f8fa6'
    }
})

//создаем дефолтные карточки
const initialCardList = new Section({ 
    renderer: (item) => {
        const card = createCard(item);
        initialCardList.addItem(card);
    } 
}, '.elements__container');

//создаем экземпляр класса UserInfo
export const userData = new UserInfo({
    userName: '.profile__name',
    userJob: '.profile__description',
    userAvatar: '.profile__avatar'
})

//создаем переменную в глобальной области видимости, чтобы переопределить ее в запросе
export let userID = '';

//отрисовываем карточки в соответсвии с данными о пользователе
Promise.all([api.getUserInformation(), api.getAllCards()])
.then(([userInfo, cards]) => {
    userData.setUserInfo(userInfo);
    userID = userInfo._id;
    initialCardList.renderItems(cards);
})
.catch((error) => {
    console.log(`Ошибка: ${error}`);
    console.log(userID);
})

//создаем экземпляр класса попапа с картинкой
export const fullSizeImage = new PopupWithImage('.popup_type_size');

//вызываем метод, чтобы закрывать картинку с помощью крестика и клика по оверлею
fullSizeImage.setEventListeners();

//создаем экземпляр класса PopupWithForm, чтобы создавать новые карточки
const formAddCard = new PopupWithForm(
    '.popup_type_card',
    (data) => {
        formAddCard.renderLoading(data);
        api.postNewCard(data)
        .then((item) => {
            const card = createCard(item);
            initialCardList.addItem(card);
            formAddCard.close();
        })
        .catch((error) => {
            console.log(`Ошибка: ${error}`);
        })
        .finally(() => {
            formAddCard.renderLoading(false);
        })
});

//вешаем слушатель сабмита формы
formAddCard.setEventListeners();

//создаем экземпляр класса PopupWithForm, чтобы редактировать данные пользователя
const profileEditForm = new PopupWithForm(
    '.popup_type_profile',
    (data) => {
        profileEditForm.renderLoading(data);
        api.changeUserInfo(data)
        .then((res) => {
            userData.setUserInfo(res);
            profileEditForm.close();
        })
        .catch((error) => {
            console.log(`Ошибка: ${error}`);
        })
        .finally(() => {
            profileEditForm.renderLoading(false);
        })
})

//вешаем слушатель сабмита
profileEditForm.setEventListeners();

//создаем попап подтверждения удаления карточки
export const popupWithConfirm = new PopupWithConfirm('.popup_type_delete');

//вешаем слушатель клика
popupWithConfirm.setEventListeners();

//создаем попап с формой обнолвения аватарки
const popupWithAvatar = new PopupWithAvatar(
    '.popup_type_avatar',
    (data) => {
        popupWithAvatar.renderLoading(data);
        api.changeAvatar(data)
        .then((res) => {
            userData.setUserInfo(res);
            popupWithAvatar.close();
        })
       .catch((error) => {
           console.log(`Ошибка: ${error}`);
       })
       .finally(() => {
            popupWithAvatar.renderLoading(false);
       })
})

//вешаем слушатель сабмита
popupWithAvatar.setEventListeners();

//создаем экземпляр класса FormValidator для запуска валидации на форме добавления карточки
const popupAddCardFormCheckValid = new FormValidator(validationData, popupAddCardForm);

popupAddCardFormCheckValid.enableValidation();

//создаем экземпляр класса FormValidator для запуска валидации на форме редактирования профиля
const popupProfileFormElementChekValid = new FormValidator(validationData, popupProfileFormElement);

popupProfileFormElementChekValid.enableValidation();

////создаем экземпляр класса FormValidator для запуска валидации на форме редактирования аватара
const popupAvatarCheckValid = new FormValidator(validationData, popupAvatarForm);

popupAvatarCheckValid.enableValidation();

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

//открываем попап обнолвения аватара
profileAvatarButton.addEventListener('click', () => {
    popupAvatarCheckValid.resetFormCondition();
    popupWithAvatar.open();
})
