(()=>{"use strict";const e={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__error",errorClass:"popup__error_visible"};class t{static selectors={template:"#element",element:".element",imageButton:".element__button",image:".element__image",deleteButton:".element__delete",name:".element__title",likeButton:".element__like"};constructor(e,t,s){this._name=e.name,this._link=e.link,this.templateSelector=t,this._handleCardClick=s,this.generateCard()}_getTemplate(){return document.querySelector(this.templateSelector).content.querySelector(".element").cloneNode(!0)}_deleteCard(){this._element.remove()}_likeCard(){this._likeButton.classList.toggle("element__like_active")}_openPopup(){popupImage.src=this._link,popupImage.alt=this._name,popupCaption.textContent=this._name,openModalWindow(popupImageElement)}_setEventListeners(){this._element.querySelector(t.selectors.deleteButton).addEventListener("click",(()=>this._deleteCard())),this._element.querySelector(t.selectors.likeButton).addEventListener("click",(()=>this._likeCard())),this._element.querySelector(t.selectors.imageButton).addEventListener("click",(()=>this._handleCardClick(this._name,this._link)))}generateCard(){return this._element=this._getTemplate(),this._element.querySelector(t.selectors.name).textContent=this._name,this._element.querySelector(t.selectors.image).src=this._link,this._element.querySelector(t.selectors.image).alt=this._name,this._likeButton=this._element.querySelector(t.selectors.likeButton),this._setEventListeners(),this._element}}class s{constructor(e,t){this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector)}_showInputError(e,t){const s=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),s.textContent=t,e.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",e.classList.remove(this._errorClass)}_isValid(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_hasInvalidInput(e){return e.some((e=>!e.validity.valid))}_toggleButton=(e,t)=>{this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)};_setEventListener(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._isValid(e),this._toggleButton(this._inputList,this._button)}))})),this._form.addEventListener("reset",(()=>{this._toggleButton(this._inputList,this._button)}))}enableValidation(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}}class r{constructor(e){this._popup=document.querySelector(e)}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popup.addEventListener("mousedown",(e=>{(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}))}}class n extends r{constructor(e,{callbackFormSubmit:t}){super(e),this._callbackFormSubmit=t,this._popupForm=this._popup.querySelector(".form"),this._inputList=Array.from(this._popupForm.querySelectorAll(".popup__input"))}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._callbackFormSubmit(this._getInputValues())}))}close(){super.close(),this._popupForm.reset()}}const o=document.querySelector(".popup_type_profile"),i=document.querySelector(".popup_type_card-add"),l=document.querySelector(".profile"),a=document.querySelector("#submit"),u=i.querySelector("#create"),p=l.querySelector(".profile__edit"),c=l.querySelector(".profile__add"),_=o.querySelector(".popup__input_info_name"),d=o.querySelector(".popup__input_info_status"),m=new class extends r{constructor(e){super(e),this._popupImage=document.querySelector(".popup__image"),this._popupCaption=document.querySelector(".popup__caption")}open(e,t){this._popupCaption.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,super.open()}}(".popup_type_picture");m.setEventListeners();const h=(e,t)=>{m.open(e,t)},S=new class{constructor({userNameSelector:e,userStatusSelector:t}){this._userName=document.querySelector(e),this._userStatus=document.querySelector(t)}getUserInfo(){return{userName:this._userName.textContent,userStatus:this._userStatus.textContent}}setUserInfo(e){this._userName.textContent=e.userName,this._userStatus.textContent=e.userStatus}}({userNameSelector:".profile__name",userStatusSelector:".profile__status"}),v=new class{constructor({items:e,renderer:t},s){this._items=e,this._renderer=t,this._container=document.querySelector(s)}render(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:e=>{const s=new t(e,"#element",h);v.addItem(s.generateCard())}},".elements");v.render();const y=new n(".popup_type_profile",{callbackFormSubmit:e=>{S.setUserInfo({userName:e.name,userStatus:e.status}),y.close()}});y.setEventListeners(),p.addEventListener("click",(function(){y.open();const e=S.getUserInfo();_.setAttribute("value",e.userName),d.setAttribute("value",e.userStatus)}));const k=new n(".popup_type_card-add",{callbackFormSubmit:e=>{var s;v.addItem((s={name:e.place,link:e.image},new t(s,"#element",h).generateCard())),k.close()}});k.setEventListeners(),c.addEventListener("click",(function(){k.open()})),new s(e,u).enableValidation(),new s(e,a).enableValidation()})();