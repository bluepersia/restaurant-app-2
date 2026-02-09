import { calculateCart, generateListHTML } from "./utils.js";

export default function Cart(el, cartContext, productsContext) {
  el.style.display = "none";

  const listEl = el.querySelector("[data-list]");
  const totalEl = el.querySelector("[data-total]");
  const checkoutBtn = el.querySelector("[data-checkout-btn]");

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

  function handleCheckoutClick() {}
}
