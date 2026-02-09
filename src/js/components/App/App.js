import ProductsContext from "../../context/productsContext.js";
import MainMenu from "../MainMenu/MainMenu.js";

export default async function App() {
  const productsContext = await ProductsContext();
  MainMenu(document.getElementById("main-menu"), productsContext);
}
