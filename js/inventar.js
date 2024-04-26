export default class Inventar {
  constructor() {
    this.inventar = document.querySelector(".inventar");
    this.inventar.innerHTML = `
            ${this.createHeader("Inventar")}
            <div class='inventar__label'>
                <p>Name</p>
                <p>Bonus</p>
                <p>Pool</p>
            </div>
            <div class='inventar__items'>
                ${this.createItem()}
                ${this.createItem()}
                ${this.createItem()}
                ${this.createItem()}
            </div>

            <div class='inventar__geld'>
                <p>Kupfer</p>
                <div class='value-box'></div>
                <p>Silber</p>
                <div class='value-box'></div>
                <p>Gold</p>
                <div class='value-box'></div>
                <p class='inventar__vorraete-label'>Vorräte</p>
                <div class='value-box inventar__vorraete-value'></div>
            </div>

            <div class='inventar__label'><p>Sonstiges</p></div>
            <div class='inventar__sonstiges'></div>
        `;
  }

  createItem() {
    return `
        <div class='inventar__item'>
            <div></div>
            <div></div>
            <div></div>
        </div>`;
  }

  createHeader(title = "", type = "h2") {
    return `
        <${type}>
            <i class="fa-solid fa-diamond"></i>
                ${title}
            <i class="fa-solid fa-diamond"></i>
        </${type}>`;
  }
}
