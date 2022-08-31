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
    popupBigSizeElement,
    popupBigSizeImage,
    popupBigSizeTitle,
    popups,
  } from '../scripts/utils/global_const.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import { validationData } from '../scripts/utils/global_const.js';

//открываем попап редактирования профиля
profileEditButton.addEventListener('click', () => {
    profileEditForm.open();
    userData.getUserInfo();
});
//popupProfileFormElement.addEventListener('submit', () => {
//    userData.getUserInfo();
//});

//открываем попап добавления карточки
profileAddButton.addEventListener('click', () => {
    addCardForm.open();
});
//popupAddCardForm.addEventListener('submit', addNewCard);



const popupAddCardFormCheckValid = new FormValidator(validationData, popupAddCardForm);

popupAddCardFormCheckValid.enableValidation();

const popupProfileFormElementChekValid = new FormValidator(validationData, popupProfileFormElement);

popupProfileFormElementChekValid.enableValidation();


//импортируем функцию, чтобы связать 
//import renderElements from '../scripts/utils/utils.js';

//import Popup from '../scripts/components/Popup.js';
import Section from '../scripts/components/Section.js';
//import { renderElements } from '../scripts/utils/utils.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { userData } from '../scripts/components/UserInfo.js';
//import { addNewCard } from '../scripts/utils/utils.js';

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

//создаем попап добавления карточки с помощью класса PopupWithForm
//const addCardForm = new PopupWithForm(
   // '.popup_type_card',
   //// (item) => {
        //const newCard = new Section({
        //    item,
        //    renderer: (item) => {
        //        const card = new Card({
        //            card: item,
        //            handleCardClick: () => {
        //                fullSizeImage.open(item.name, item.link)
        //            }
        //        }, '#element-card');
        //        const cardElement = card.generateCard();
        //        addCardForm.addItem(cardElement);
        //        addCardForm.close();
        //    }}, '.elements__container')
    //});

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