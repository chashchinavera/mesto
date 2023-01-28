export default class Renderable {
    constructor(templateSelector) {

        this._element = document.querySelector(templateSelector).content.cloneNode(true);
    }
  
    render(where) {
      where.appendChild(this._element);
    }
  }