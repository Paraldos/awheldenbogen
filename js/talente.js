import Nodetype from "./nodetype.js";

export default class Talente extends Nodetype {
    constructor() {
        super()
        this.talente = document.querySelector('.talente')
        this.talente.innerHTML = `
            ${this.createHeader('Talente')}
            <div class='talente__container'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `
    }
}
