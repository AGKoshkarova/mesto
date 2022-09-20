import { data } from "autoprefixer";

export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse() {
        return (res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Код ошибки: ${res.status}.`)
        }
    }

    getUserInformation() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse())
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse())
    }

    changeUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse())
    }

    postNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse())
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse())
    }
    
    putLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse())
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse())
    }
    
    changeAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse())
        }
}