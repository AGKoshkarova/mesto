import Card from "../components/Card.js"
import { fullSizeImage } from "../pages/index.js";
import { initialCardList } from "../pages/index.js";

export function renderElements (item) {
    const card = new Card({
        card: item,
        handleCardClick: () => {
            fullSizeImage.open(item.name, item.link)
        }
    }, '#element-card');

    const cardElement = card.generateCard();
    initialCardList.addItem(cardElement);
}