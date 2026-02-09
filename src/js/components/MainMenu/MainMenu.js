import { generateHTML } from "./utils.js";

export default function MainMenu(el, productsContext, cartContext) {
  el.innerHTML = generateHTML(productsContext.menuItems);

  el.addEventListener("click", handleClick);

  function handleClick(e) {
    if (e.target.dataset.add === "") {
      const closestId = e.target.closest("[data-item-id]");

      cartContext.addToCart(Number(closestId.dataset.itemId));
    }
  }
}
