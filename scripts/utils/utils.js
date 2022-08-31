//здесь будет функция для создания элементов, которая будет использоваться в классах

//импортируем используемые элементы:
//массив и контейнер с карточкками
import { initialCards, 
  cardsContainer, 
  profileName, 
  profileDescription, 
  profileNameInput,
  profileDescriptionInput,
  popupBigSizeImage,
  popupBigSizeTitle,
  popupAddCardNameInput,
  popupAddCardLinkInput,
} from "./global_const.js";

//импортируем используемые классы (в которых будет вызвана функция) из папки components
//...
import Card from "../components/Card.js";
import Section from '../components/Section.js';

export function renderElements(item) {

    //cardList.innerHTML = '';
  //items.forEach((item) => {
    //const card = isGrid
    //  ? new DefaultCard(item, '.default-card')
    //  : new HorizontalCard(item, '.horizontal-card');

    //const cardElement = card.generateCard();
    //cardList.append(cardElement);
}

//ВНИМАНИЕ! Эту функцию нужно будет импортировать в index.js

//функция сабмита формы
export function popupProfileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeProfilePopup();
}

//функция создания карточек

function createCard (item) {
  const card = new Card({
    item: {name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value}, 
    handleCardClick: (item) => {
      const cardElement = card.generateCard();
      return cardElement;
    }}, "#element-card");
  const newCard = card.generateCard();  
  return newCard;
}

//function createCard(item) {
//  const card = new Section({
//    item: ({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value}),
//    renderer: (item) => {
//      const card = new Card({
//      card: item,
//      handleCardClick: () => {
//          fullSizeImage.open(item.name, item.link)
//      }
//  }, '#element-card');
//      const cardElement = card.generateCard();
//
//      initialCardList.addItem(cardElement);
//  }, '.elements__container'
//}

//function createCard (item) { 
//  const element = new Section({ 
//  item, //{name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value},
//  renderer: (item) => {
//      const card = new Card({
//      card: item,
//      handleCardClick: () => {
 //         fullSizeImage.open(item.name, item.link)
//      }
//  }, '#element-card');
//      const cardElement = card.generateCard();

//      initialCardList.addItem(cardElement);
// } }, '.elements__container');
//}

//функция добавления новых карточек

export function addNewCard(evt) {
  evt.preventDefault();
  const newCard = createCard({name: popupAddCardNameInput.value, link: popupAddCardLinkInput.value});
  cardsContainer.prepend(newCard);

  //closeAddCardPopup();
};