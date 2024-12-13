/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from "/data.js";

// Some useful elements
const guessInput = document.getElementById("guess-input");
const guessInputForm = document.getElementById("guess-input-form");
const messageContainer =
  document.getElementsByClassName("message-container")[0];
const emojiCluesContainer = document.getElementsByClassName(
  "emoji-clues-container"
)[0];
let currentQuestion = 0;
let count = 3;

guessInputForm.addEventListener("submit", (e) => {
  const movieGuess = guessInput.value.toLowerCase();
  const correctMovieName = films[currentQuestion].title.toLowerCase();

  if (correctMovieName === movieGuess) {
    //case3- correct guess
    count = 3;
    currentQuestion++;
    messageContainer.innerText = "Correct";
    //call function to  show new emoji after 3second
  } else if (count > 1 && correctMovieName !== movieGuess) {
    count--;
    messageContainer.innerText = `Incorrect, You have only ${count} guess left`;
  } else if (count === 1 && correctMovieName !== movieGuess) {
    //case2- incorrect with 0 guess
    messageContainer.innerText = `Film was ${films[currentQuestion]} `;
    count = 3;
    currentQuestion++;
  } else if (currentQuestion === films.length - 1) {
    // currentQuestion === films.length-1
    //case4- all movie done
    messageContainer.innerText = "That's all folks";
  }
});

// case1- incorrect with more than 1 guess --> guess reduce, message Incorrect along with prev message
//case2- incorrect with 0 guess --> all guesses done, render movie name  --> new emoji render after 3 seconds
//case3- correct guess--> correct message render --> reset guess number(3) --> new emoji render after 3 seconds
//case4- all movie done --> message render that's all folks.
