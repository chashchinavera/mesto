class Api {

  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
  }

  //Обработка ответа сервера
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

  //Получение информации о пользователе
  getUserData() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  // Отправка информации о пользователе на сервер
  sendUserData(profileData) {
    return fetch(`${this._link}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.status
      })
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  //Получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return this._handleResponse(res);
        }
      });
  }

  //Добавление новой карточки
  addNewCard({ name, link }) {
    return fetch(`${this._link}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  // Удаление карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  // Отправка лайка на сервер
  putCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  // Удаление лайка на сервере
  removeCardLike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }

  // Отправко информации об аватаре на сервер
  sendAvatarData(avatarLink) {
    return fetch(`${this._link}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatarUrl})
    })
      .then(res => {
        return this._handleResponse(res);
      })
  }
}


export const api = new Api({
  link: 'https://mesto.nomoreparties.co/v1/cohort-60/',
  headers: {
    authorization: '547614fb-6c6c-41a0-81d5-2f6d1a17b0c6',
    'Content-Type': 'application/json'
  }
});