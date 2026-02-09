function generateHTML(items) {
  return items
    .map(
      ({ id, emoji, name, price, ingredients }) => `<li class="main-menu__item">
              <div class="menu-item" data-item-id="${id}">
                <p class="menu-item__emoji">${emoji}</p>
                <div class="menu-item__content">
                  <h3 class="menu-item__title u-fw-400">${name}</h3>
                  <p class="menu-item__ingredients">
                    ${ingredients.join(", ")}
                  </p>
                  <p class="menu-item__price u-fw-400">$${price}</p>
                </div>
                <button class="menu-item__add-btn" data-add>+</button>
              </div>
            </li>`
    )
    .join("");
}

export { generateHTML };
