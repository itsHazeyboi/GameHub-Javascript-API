// Add event listeners to all the items that are generated ✅

// Filter the displayed list depending on what filters are enabled. ✅

import { indexGameHtmlBuilder } from "./gameHtmlBuilder.mjs";

export const addGenreEventListeners = (allGames) => {
  document.querySelectorAll(".ul-filterbox li").forEach((li) => {
    li.addEventListener("click", () => {
      filterByGenre(li.textContent, allGames);
    });
  });
};

const filterByGenre = (genre, games) => {
  if (genre === "Show All") {
    indexGameHtmlBuilder(games);
  } else {
    let filteredList = games.filter((game) => game.genre === genre);
    indexGameHtmlBuilder(filteredList);
  }
};
