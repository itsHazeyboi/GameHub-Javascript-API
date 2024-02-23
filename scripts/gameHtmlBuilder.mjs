export function indexGameHtmlBuilder(game) {
  //Here I set the inner HTML to blank so that when I filter it doesen't lay double or add unto it
  const gameRow1 = document.getElementById("GamesList");
  gameRow1.innerHTML = "";

  game.forEach((game) => {
    // Here I create the elements neccessary for the games.

    const listCreate = document.createElement("li");
    const hyperLinkCreate = document.createElement("a");
    const imageCreate = document.createElement("img");
    const gameTitle = document.createElement("p");
    const priceCreate = document.createElement("p");
    imageCreate.addEventListener("click", () => {
      localStorage.setItem("gameInfo", JSON.stringify(game));
    });
    hyperLinkCreate.setAttribute("href", "./gamepage1.html");

    //Here i change the elements to what I want them to contain / be.

    imageCreate.setAttribute("src", game.image.url);
    imageCreate.setAttribute("alt", game.title);
    listCreate.append(hyperLinkCreate);
    hyperLinkCreate.append(imageCreate);
    gameTitle.innerText = game.title;
    if (game.onSale) {
      priceCreate.innerText = `Sale: ${game.discountedPrice} $`;
      priceCreate.className = "gameonSale";
    } else {
      priceCreate.innerText = `${game.price} $`;
    }
    gameTitle.className = "gametitle";
    listCreate.append(gameTitle);
    listCreate.appendChild(priceCreate);
    gameRow1.append(listCreate);
  });
}
