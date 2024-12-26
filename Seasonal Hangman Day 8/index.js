// The keyboard has been rendered for you
import { renderKeyboard } from "/keyboard";
const keyboardContainer = document.getElementById("keyboard-container");

// Some useful elements
const guessContainer = document.getElementById("guess-container");
const snowmanParts = document.querySelectorAll(".snowman-part");
const sunglasses = document.querySelector(".sunglasses");

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

// Set the word to guess
const word = "gifti";
// 6 guesses for the 6 parts of the snowman
let guesses = 6;

// wordArr: Removing those which are selected;
const wordArr = word.split(""); // ["g", "i", "f", "t"]

// staticWordArr: We will change this when a word is found to update isVisible property
// example: // [{char: "g", isVisible: false}, .....];
const staticWordArr = wordArr.map((char) => {
  return { char, isVisible: false };
});

const showResult = (msg) => {
  guessContainer.innerText = msg;
};

const showCorrectCharacter = (key) => {
  // index = 0
  // show in the UI
  const updatedDisplayGuesses = staticWordArr
    .map((charObj) => {
      console.log("i", i); // ["g", "i", "-", "-"]
      if (key === charObj.char || charObj.isVisible) {
        charObj.isVisible = true;
        return charObj.char; // "g" "i"
      }
      return "-";
    })
    .join(" "); // ["g", "i", "-", "-"].join(" ") => "g i - -"

  showResult(updatedDisplayGuesses); // "g i - -"
};

function checkGuess(e) {
  const key = e.target.id;
  console.log(key);
  // console.log(wordArr)
  if (key === "keyboard-container" || guesses <= 0) return;

  const index = wordArr.indexOf(key);
  // console.log(index)

  if (index > -1) {
    showCorrectCharacter(key);

    // remove the correct guess from wordArr
    wordArr.splice(index, 1);
    console.log(wordArr);

    // When there are no more words left to guess
    if (wordArr.length === 0) {
      // Display winning message
      setTimeout(() => showResult("You won!! :D"), 1500);

      // Show all snowman parts again
      snowmanParts.forEach((part) => {
        part.style.visibility = "visible";
      });
      // show sunglasses
      sunglasses.style.visibility = "visible";
    }
  } else {
    // When wrong guess
    guesses = guesses - 1;
    // Hide one snowman part
    snowmanParts[guesses].style.visibility = "hidden"; //5,4,3,2,1,0

    // When there are no guesss left
    if (guesses === 0) {
      showResult("You lost :(");
      // disable the keyboard
      toggleKeyboardDisable("true");
    }
  }
}

renderKeyboard();

// Enable/Disable the keyboard buttons;
const toggleKeyboardDisable = (value) => {
  keyboardContainer.childNodes.forEach((child) => {
    child.disabled = value;
  });
};

showResult(staticWordArr.map((_) => "-").join(" ")); // ["-", "-", "-", "-"].join(" ") => "- - - -"

keyboardContainer.addEventListener("click", checkGuess);
