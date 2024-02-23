import { createCart } from "./addtocart.mjs";
import { updateCartTotal } from "./updateCartTotal.mjs";
import { clearCart } from "./addtocart.mjs";
import { removeCartItem } from "./addtocart.mjs";
createCart();

//Set the localstorage Object we get back by parsing it to Shoppingcart variable.
//I also call the updateCartTotal function to summarize the total of the cart.
const shoppingcart = JSON.parse(localStorage.getItem("cart"));

updateCartTotal(shoppingcart);

// Here I generate all the HTML for the page.
//----------------------------------------------------------------------------------

function generateCheckoutHtml() {
  if (localStorage.getItem("cart") !== "[]") {
    //Select the right elements to process from the HTML && Make One Time instances
    let cart = localStorage.getItem("cart");
    let main = document.querySelector("main");
    let cartBottom = document.querySelector("#cart-bottom");

    let mainCheckoutContainer = document.createElement("div");
    mainCheckoutContainer.classList = "cart-full-container";
    main.append(mainCheckoutContainer);
    main.insertBefore(mainCheckoutContainer, cartBottom);

    let emptyCartText = document.getElementById("emptycartheader1");
    let addGamesText = document.getElementById("addgamestocart");

    let addToCartButton = document.getElementById("addtocartbutton");
    addToCartButton.addEventListener("click", clearCart);

    let cartTitle = document.createElement("h1");
    cartTitle.innerText = " Your Shopping Cart: ";
    mainCheckoutContainer.append(cartTitle);

    let totalAmountBox = document.createElement("div");
    let gamePriceTotal = document.createElement("p");
    totalAmountBox.append(gamePriceTotal);
    main.appendChild(totalAmountBox);

    shoppingcart.forEach((element) => {
      //Create all the neccessary elements for the shoppingcart items

      let checkoutGamePriceCheck = () => {
        if (element.onSale) {
          return element.discountedPrice;
        } else {
          return element.price;
        }
      };

      let cartItemContainer = document.createElement("div");
      cartItemContainer.classList = "cart-item-container";
      cartItemContainer.setAttribute("data-game-id", element.id);

      let image = document.createElement("img");
      image.classList = "gameImage";
      image.src = element.image.url;

      let cartItemTextContainer = document.createElement("div");
      cartItemTextContainer.classList = "cart-item-text-container";

      let checkoutGameTitle = document.createElement("h3");
      checkoutGameTitle.innerText = element.title;

      let checkoutGamePrice = document.createElement("p");
      checkoutGamePrice.innerText = `$ ${checkoutGamePriceCheck()}`;

      let checkoutRemoveButton = document.createElement("button");
      checkoutRemoveButton.classList = "remove-from-cart-button";
      checkoutRemoveButton.innerText = "Remove From Cart";
      checkoutRemoveButton.addEventListener("click", removeCartItem);

      //Append everything to where it belongs
      mainCheckoutContainer.append(cartItemContainer);
      cartItemContainer.append(
        image,
        cartItemTextContainer,
        checkoutRemoveButton
      );
      cartItemTextContainer.append(checkoutGameTitle, checkoutGamePrice);
    });
  } else {
    //Here I clean up some text and place in a placeholder if the cart's empty.

    let main = document.querySelector("main");

    const cartBottomRemover = document.getElementById("cart-bottom");
    cartBottomRemover.remove();

    const placeHolderEmptyHeader = document.createElement("h1");
    placeHolderEmptyHeader.innerText = "Oops! Looks a little empty here :(";

    const placeHolderEmptyText = document.createElement("p");
    placeHolderEmptyText.innerText = "Add games to your cart to see them here!";

    main.append(placeHolderEmptyHeader, placeHolderEmptyText);
  }
}

generateCheckoutHtml();
