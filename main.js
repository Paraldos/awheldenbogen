let attribute = document.querySelector('.attribute')

attribute.innerHTML = `
    ${createHeader('Attribute', 'h1')}
    <div class='attribute__content'>
        ${createAttribute('Stärke')}
        ${createAttribute('Geschick')}
        ${createAttribute('Zähigkeit')}
        ${createAttribute('Charisma')}
        ${createAttribute('Klugheit')}
        ${createAttribute('Weisheit')}
    </div>
`

function createAttribute(title = '') {
    return `
    <div class='attribut'>
        <p>${title}</p>
        <div></div>
    </div>`
}

function createHeader(title = '', type = 'h2') {
    return `
    <${type}>
        <i class="fa-solid fa-diamond"></i>
            ${title}
        <i class="fa-solid fa-diamond"></i>
    </${type}>`;
}