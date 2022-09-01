import { initialCards, 
    popupProfileFormElement,
    profileName,
    profileDescription,
    profileNameInput,
    profileDescriptionInput, 
    profileEditButton,
    profileAddButton,
    popupAddCardForm
  } from '../scripts/utils/constants.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import { validationData } from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import { userData } from '../scripts/components/UserInfo.js';

//создаем дефолтные карточки
const initialCardList = new Section({ 
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
        card: item,
        handleCardClick: () => {
            fullSizeImage.open(item.name, item.link)
        }
    }, '#element-card');
        const cardElement = card.generateCard();

        initialCardList.addItem(cardElement);
    } }, '.elements__container');

initialCardList.renderItems();

//создаем экземпляр класса попапа с картинкой
const fullSizeImage = new PopupWithImage('.popup_type_size');

//вызываем метод, чтобы закрывать картинку с помощью крестика и клика по оверлею
fullSizeImage.setEventListeners();

//создаем экземпляр класса PopupWithForm, чтобы создавать новые карточки
const addCardForm = new PopupWithForm(
    '.popup_type_card',
    (item) => {
                const card = new Card({
                card: item,
                handleCardClick: () => {
                    fullSizeImage.open(item.name, item.link)
                }
            }, '#element-card');
                const cardElement = card.generateCard();
                initialCardList.addItem(cardElement);
                addCardForm.close();
    }
)

//вешаем слушатель сабмита формы
addCardForm.setEventListeners();

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
    addCardForm.open();
});