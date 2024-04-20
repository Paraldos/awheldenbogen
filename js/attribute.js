export default class Attribute {
    constructor() {
        this.Attribute = document.querySelector('.attribute')
        this.Attribute.innerHTML = `
        ${createHeader('Attribute', 'h2')}
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
function createHeader(title = '', type = 'h2') {
    return `
    <${type}>
        <i class="fa-solid fa-diamond"></i>
            ${title}
        <i class="fa-solid fa-diamond"></i>
    </${type}>`;
}