export default class UserInfo {
    constructor({ userName, userJob }) {
        this._userNameSelector = document.querySelector(userName);
        this._userJobSelector = document.querySelector(userJob);
    }

    //публичный метод getUserInfo, который возвращает объект с данными пользователя. 
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    getUserInfo() {
        return {
            name: this._userNameSelector.textContent,
            description: this._userJobSelector.textContent,
        }
    }

    //публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(item) {
        this._userNameSelector.textContent = item.name;
        this._userJobSelector.textContent = item.description;
    }
}


