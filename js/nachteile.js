export default class Nachteile {
    constructor() {
        this.nachteile = document.querySelector('.nachteile')
        this.nachteile.innerHTML = `
            ${createHeader('Nachteile')}
            <div class='nachteile__container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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