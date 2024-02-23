import { updateCartTotal } from "./updateCartTotal.mjs";

export function removeAndUpdate(itemId) {
  // Retrieve the cart from local storage
  const cart = JSON.parse(localStorage.getItem("cart"));

  // Find the index of the item to remove in the cart array
  const itemIndex = cart.findIndex((item) => item.id === itemId);

  // If the item is found in the cart array, remove it
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Item removed from cart and local storage updated.");
  } else {
    console.log("Item not found in cart.");
  }

  localStorage.setItem("cartCounter", cart.length);

  updateCartTotal(cart);
}
