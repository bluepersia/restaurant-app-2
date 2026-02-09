import { addToCartPure } from "./utils.js";

export default function CartContext() {
  let state = {
    cart: [],
  };
  const cartChanged = [];

  function getCart() {
    return state.cart;
  }

  function addToCart(id) {
    state = addToCartPure(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  return {
    getCart,
    cartChanged,
    addToCart,
  };
}
