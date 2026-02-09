import { getMenuItems } from "../api/mainMenu.js";

export default async function ProductsContext() {
  const menuItems = await getMenuItems();

  function getItemById(id) {
    return menuItems.find((item) => item.id === id);
  }

  return {
    menuItems,
    getItemById,
  };
}
