export default function Checkout(el, cartContext) {
  el.style.display = "none";

  const form = el.querySelector("[data-form]");

  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    el.style.display = "none";

    cartContext.emptyCart();
  }

  function open() {
    el.style.display = "block";
  }

  return {
    open,
  };
}
