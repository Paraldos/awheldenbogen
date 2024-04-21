export default class Nodetype {
    createHeader(title = '', type = 'h2') {
        return `
        <${type}>
            <i class="fa-solid fa-diamond"></i>
                ${title}
            <i class="fa-solid fa-diamond"></i>
        </${type}>`;
    }
}

