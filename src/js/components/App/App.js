import CartContext from "../../context/CartContext/cartContext.js";
import ProductsContext from "../../context/productsContext.js";
import MainMenu from "../MainMenu/MainMenu.js";

export default async function App() {
  const productsContext = await ProductsContext();
  const cartContext = CartContext();
  MainMenu(document.getElementById("main-menu"), productsContext, cartContext);
}
