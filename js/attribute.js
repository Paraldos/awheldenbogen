import Nodetype from './nodetype.js';

export default class Attribute extends Nodetype {
    constructor() {
        super()
        this.Attribute = document.querySelector('.attribute')
        this.Attribute.innerHTML = `
        ${this.createHeader('Attribute', 'h2')}
        <div class='attribute__content'>
            ${this.createAttribute('Stärke')}
            ${this.createAttribute('Geschick')}
            ${this.createAttribute('Zähigkeit')}
            ${this.createAttribute('Charisma')}
            ${this.createAttribute('Klugheit')}
            ${this.createAttribute('Weisheit')}
        </div>`
    }

    createAttribute(title = '') {
        return `
        <div class='attribut'>
            <p>${title}</p>
            <div></div>
        </div>`
    }
}