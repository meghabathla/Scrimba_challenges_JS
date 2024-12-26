// function shuffleArray(arr) {
//   // Repeat the array and shuffle it
//   const doubledArray = [...arr, ...arr];
//   console.log(Math.random() - 0.5);
//   // Shuffle using sort and a random comparison function
//   return doubledArray.sort(() => Math.random() - 0.5);
// }

// const myArray = [1, 2, 3, 4];
// const shuffledArray = shuffleArray(myArray);
// console.log(shuffledArray);
// --------------------------------------- Rough :-|
// function shuffleArray(array) {
//   let shuffledArray = [];
//   for (let i = 0; i < array.length; i--) {
//     const randomIndex = Math.floor(Math.random() * i + 1);
//     shuffleArray.push(array[randomIndex]);
//   }
//   console.log(shuffledArray);
//   return shuffleArray;
// }
// shuffledArray(emojis);

const newWord = "hello".split("");
const index = newWord.indexOf("o");
const newindex = newWord.lastIndexOf("0");
console.log(index, newindex);
