import Renderable from "./Renderable.js";
import Card from "./Card.js";

export default class Section extends Renderable {

    static selectors = {
        template: '#elements',
    }

    constructor(cards) {
        super(Section.selectors.template);

        this._cards = cards;
    }

    render(where) {
        this._cards.forEach(this.add);

        super.render(where);
    }

    add = (name, link) => {
        const card = new Card(name, link, this.add);
        card.render(this._element);
    }
}