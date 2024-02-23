import { removeAndUpdate } from "./remove.mjs";
import { updateCartTotal } from "./updateCartTotal.mjs";
cartIconUpdater();

//Under you'll find all the basic cart functions you'd expect in one module.

export function createCart(game) {
  const cartExists = localStorage.getItem("cart");
  if (!cartExists) {
    localStorage.setItem("cart", JSON.stringify([]));
    console.log("No cart, Cart has been added");
  }
}

//---------------------------------------------------------------------------------------

export function addToCart(game) {
  console.log("Add to cart", game);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const itemIndex = cart.findIndex((currentGame) => {
    if (game.id === currentGame.id) {
      return true;
    } else {
      return false;
    }
  });

  if (itemIndex === -1) {
    cart.push({ ...game, quantity: 0 });
  } else {
    cart[itemIndex].quantity++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  localStorage.setItem("cartCounter", cart.length);

  cartIconUpdater();
}

//---------------------------------------------------------------------------------------

export function removeCartItem(event) {
  const button = event.target;

  let idElementContainer = button.parentElement;

  let itemId = idElementContainer.getAttribute("data-game-id");

  removeAndUpdate(itemId);

  button.parentElement.remove();

  cartIconUpdater();
}

//---------------------------------------------------------------------------------------

export function clearCart() {
  localStorage.removeItem("cart");
  alert("Thank you for your purchase. Your cart has been cleared.");
  localStorage.setItem("cartCounter", 0);
}

//---------------------------------------------------------------------------------------

export function cartIconUpdater() {
  let cartIconElement = document.getElementById("cart-notification");
  let cartCounter = localStorage.getItem("cartCounter");

  if (localStorage.getItem("cartCounter") <= 0) {
    cartIconElement.style.display = "none";
  } else {
    cartIconElement.style.display = "block";
    cartIconElement.innerText = cartCounter;
  }
}
