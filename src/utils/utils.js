import Card from "../components/Card.js"
import { fullSizeImage, initialCardList } from "../pages/index.js";

export function createCard (item) {
    const card = new Card({
        card: item,
        handleCardClick: () => {
            fullSizeImage.open(item.name, item.link)
        }
    }, '#element-card');

    const cardElement = card.generateCard();
    return cardElement;
}

export function renderCard (card) {
    initialCardList.addItem(card);
}
