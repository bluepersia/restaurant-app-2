import { calculateCart, generateListHTML } from "./utils.js";

export default function Cart(el, cartContext, productsContext) {
  el.style.display = "none";

  const listEl = el.querySelector("[data-list]");
  const totalEl = el.querySelector("[data-total]");
  const checkoutBtn = el.querySelector("[data-checkout-btn]");

  listEl.addEventListener("click", handleListClick);
  checkoutBtn.addEventListener("click", handleCheckoutClick);

  cartContext.cartChanged.push(onCartChanged);

  renderCart([]);

  function onCartChanged(cart) {
    renderCart(cart);
  }

  function renderCart(cart) {
    el.style.display = cart.length > 0 ? "block" : "none";

    const order = calculateCart(cart, productsContext);
    listEl.innerHTML = generateListHTML(order);
    totalEl.textContent = `$${order.total}`;
  }

  function handleListClick(e) {
    if (e.target.dataset.remove === "") {
      const closestId = e.target.closest("[data-item-id]");
      cartContext.removeFromCart(Number(closestId.dataset.itemId));
    }
  }

  function handleCheckoutClick() {}
}
