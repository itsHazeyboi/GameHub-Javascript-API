export function updateCartTotal(cart) {
  let startValue = 0;

  function reduceFunction(cartTotal, game) {
    let discount = game.price - game.discountedPrice;

    if (discount > 0) {
      return cartTotal + game.discountedPrice;
    } else {
      return cartTotal + game.price;
    }
  }

  let updatedCartTotal = cart.reduce(reduceFunction, startValue);

  let inputCartTotal = document.getElementById("totalPrice");
  inputCartTotal.innerText = Math.round(updatedCartTotal * 100) / 100 + "$";
}
