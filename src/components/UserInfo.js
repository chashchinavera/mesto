export default class UserInfo {

    constructor({ userNameSelector, userStatusSelector, userAvatarSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userStatus = document.querySelector(userStatusSelector);
        this._avatarLink = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const profileData = {
            userName: this._userName.textContent,
            userStatus: this._userStatus.textContent
        }
        return profileData;
    }

    setUserInfo(profileData) {
        this._userName.textContent = profileData.userName;
        this._userStatus.textContent = profileData.userStatus;
    }

    setUserAvatar(avatarLink) {
        this._avatarLink.src = avatarLink;
      }
}