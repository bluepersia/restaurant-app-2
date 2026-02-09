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

export { addToCartPure };
