function generateListHTML(order) {
  return order.items
    .map(
      ({
        id,
        name,
        quantity,
        getSubtotal,
      }) => `<li class="cart__list-item" data-item-id="${id}">
                <h3 class="cart__list-item-name u-fw-400">${name} ${
        quantity > 1 ? `(${quantity})` : ""
      }</h3>
                <button class="cart__list-item-remove-btn" data-remove>
                  remove
                </button>
                <p class="cart__list-item-price">$${getSubtotal()}</p>
              </li>`
    )
    .concat(
      order.discounts.map(
        ({ name, value }) => `<li class="cart__list-item">
                <h3 class="cart__list-item-name u-fw-400">${name}</h3>
                <p class="cart__list-item-price">-$${value}</p>
              </li>`
      )
    )
    .join("");
}

function calculateCart(cart, productsContext) {
  const items = cart.map((item) => {
    const productData = productsContext.getItemById(item.id);

    return {
      ...item,
      ...productData,
      getSubtotal: () => productData.price * item.quantity,
    };
  });
  const discounts = calculateDiscounts(items);

  const total =
    items.reduce((prev, curr) => prev + curr.getSubtotal(), 0) -
    discounts.reduce((prev, curr) => prev + curr.value, 0);

  return {
    items,
    discounts,
    total,
  };
}

function calculateDiscounts(items) {
  const allDiscounts = [];
  const comboDiscount = calculateComboDiscount(items);
  if (comboDiscount) {
    allDiscounts.push(comboDiscount);
  }

  return allDiscounts;
}

function calculateComboDiscount(items) {
  const beerCount = items.find((item) => item.name === "Beer")?.quantity || 0;
  const foodCount = items.reduce(
    (prev, curr) => (curr.name !== "Beer" ? prev + curr.quantity : prev),
    0
  );

  const lowestCount = beerCount < foodCount ? beerCount : foodCount;

  return lowestCount > 0
    ? {
        name: "Combo Discount",
        value: lowestCount * 5,
      }
    : null;
}

export { generateListHTML, calculateCart };
