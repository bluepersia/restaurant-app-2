function addToCartPure(state, id) {
  const newCart = [...state.cart];
  const itemInCart = newCart.find((item) => item.id === id);

  if (itemInCart) {
    newCart[newCart.indexOf(itemInCart)] = {
      id: itemInCart.id,
      quantity: itemInCart.quantity + 1,
    };
  } else {
    newCart.push({
      id,
      quantity: 1,
    });
  }
  return {
    ...state,
    cart: newCart,
  };
}

function removeFromCartPure(state, id) {
  const itemInCart = state.cart.find((item) => item.id === id);

  const newItemInCart = { ...itemInCart, quantity: itemInCart.quantity - 1 };

  if (newItemInCart.quantity <= 0) {
    return { ...state, cart: state.cart.filter((item) => item.id !== id) };
  }

  const newCart = [...state.cart];
  newCart[newCart.indexOf(itemInCart)] = newItemInCart;

  return { ...state, cart: newCart };
}

export { addToCartPure, removeFromCartPure };
