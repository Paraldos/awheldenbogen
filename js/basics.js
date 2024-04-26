import Nodetype from "./nodetype.js";

export default class Basics extends Nodetype {
  constructor() {
    super();
    this.basics = document.querySelector(".basics");
    this.basics.innerHTML = `
        ${this.createHeader("Heldenbogen", "h1")}
        <div class='basics__content'>
            <div></div>
            <div></div>
            <label>Name</label>
            <label>Rasse</label>
            <div></div>
            <div></div>
            <label>Klasse</label>
            <label>Motive</label>
        </div>

        <div class='basics__description'></div>
        <label>Beschreibung</label>
    `;
  }
}
