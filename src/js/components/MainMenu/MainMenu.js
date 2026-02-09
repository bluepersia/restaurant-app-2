import { generateHTML } from "./utils.js";

export default function MainMenu(el, productsContext) {
  el.innerHTML = generateHTML(productsContext.menuItems);
}
