import Nodetype from "./nodetype.js";

export default class Basics extends Nodetype {
  constructor() {
    super();
    this.basics = document.querySelector(".basics");
    this.basics.innerHTML = `
        ${this.createHeader("Heldenbogen", "h1")}
    `;
  }
}
