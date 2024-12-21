const gameContainer = document.querySelector(".game-container");
const emojis = ["🎄", "🎁", "🎅", "☃️"];
// Your set of emojis

function shuffleArryaValues(array) {
  const doubledArray = [...array, ...array];
  return doubledArray.sort(() => Math.random() - 0.5);
}

const shuffleArray = shuffleArryaValues(emojis);

function generateCards() {
  for (let i = 0; i < shuffleArray.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", i);
    card.dataset.value = shuffleArray[i];
    gameContainer.appendChild(card);
  }
}
generateCards();

const revealCards = [];
let firstCard;
let secondCard;
let isloading = false;

function hideCard(card) {
  card.classList.remove("card-reveal");
  card.innerText = "";
}

function revealCard(card, value) {
  card.classList.add("card-reveal");
  card.innerText = value;
}

function revealEmoji(e) {
  if (isloading) {
    return;
  }
  isloading = true;
  let card = e.target;
  let value = e.target.dataset.value;
  revealCard(card, value);

  if (firstCard === undefined) {
    firstCard = card;
    isloading = false;
  } else if (firstCard.dataset.value === value) {
    firstCard = undefined;
    isloading = false;
  } else {
    setTimeout(() => {
      hideCard(firstCard);
      hideCard(card);
      firstCard = undefined;
      isloading = false;
    }, 1000);
  }
}
gameContainer.addEventListener("click", revealEmoji);

/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */
