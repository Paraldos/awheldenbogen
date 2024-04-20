export default class Talente {
    constructor() {
        this.talente = document.querySelector('.talente')
        this.talente.innerHTML = `
            ${createHeader('Talente')}
            <div class='talente__container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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