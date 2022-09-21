export default class UserInfo {
    constructor({ userName, userJob, userAvatar, userID }) {
        this._userNameSelector = document.querySelector(userName);
        this._userJobSelector = document.querySelector(userJob);
        this._userAvatarSelector = document.querySelector(userAvatar);
        this._userID = userID;
    }

    //публичный метод getUserInfo, который возвращает объект с данными пользователя. 
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    getUserInfo() {
        return {
            name: this._userNameSelector.textContent,
            about: this._userJobSelector.textContent,
        }
    }

    //публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(item) {
        this._userNameSelector.textContent = item.name;
        this._userJobSelector.textContent = item.about;
        this._userAvatarSelector.src = item.avatar;
        this._userID = item._id;
    }
}


