export default class Merkmale {
    constructor() {
        this.merkmale = document.querySelector(".merkmale")
        this.merkmale.innerHTML = `
            ${createHeader('Merkmale')}
            <div class='merkmale__container'>
                ${this.createElement('EP')}
                ${this.createElement('AP')}
                ${this.createDots(12)}

                ${this.createElement('Stufe')}
                ${this.createElement('LP')}
                ${this.createDots(12)}

                ${this.createElement('Tempo')}
                ${this.createElement('SP')}
                ${this.createDots(4)}
            </div>
        `
    }

    createElement(title) {
        return `
        <div class='merkmale__element'>
            <p>${title}</p>
            <div></div>
        </div>`
    }

    createDots(amountOfDots = 3) {
        return `
            <div class='merkmale__dots'>
            ${Array(amountOfDots).fill().map(() => '<i class="fa-regular fa-circle"></i>').join('')}
            </div>
        `
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