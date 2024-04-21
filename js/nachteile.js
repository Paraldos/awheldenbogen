import Nodetype from "./nodetype.js";

export default class Nachteile extends Nodetype {
    constructor() {
        super()
        this.nachteile = document.querySelector('.nachteile')
        this.nachteile.innerHTML = `
            ${this.createHeader('Nachteile')}
            <div class='nachteile__container'>
                <div></div>
            </div>
        `
    }
}
