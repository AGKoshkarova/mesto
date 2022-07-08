const profileEditButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupElement = document.querySelector('.popup');
const popupCloseButton =  popupElement.querySelector('.popup__close-btn');
const popupFormElement = popupElement.querySelector('.popup__form');
const profileNameInput = popupFormElement.querySelector('.popup__input_type_name');
const profileDescriptionInput = popupFormElement.querySelector('.popup__input_type_description'); 

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    //profileNameInput.value = profileName.textContent;
    //profileDescriptionInput.value = profileDescription.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

function changeProfileInfo () {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent; 
}

function popupFormSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;

    closePopup();
}

profileEditButton.addEventListener('click', openPopup);

profileEditButton.addEventListener('click', changeProfileInfo);

popupCloseButton.addEventListener('click', closePopup);

popupFormElement.addEventListener('submit', popupFormSubmitHandler);
