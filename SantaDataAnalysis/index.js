import { toysRequested } from "./data.js";

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/
function getPopularToy(toys) {
  const totalCountofgift = {};
  toys.forEach((toy) => {
    toy.toys.forEach((toyObj) => {
      const key = Object.keys(toyObj);
      console.log(key);
      //   if (totalCountofgift.includes(toyObj)) {
      //     totalCountofgift[toyObj] =
      //       totalCountofgift[toyObj] + Object.values(toyObj);
      //   } else {
      //     totalCountofgift[toyObj] = Object.values(toyObj);
      //   }
    });
  });
  return totalCountofgift.sort(
    (a, b) => Object.values(b)[0] - Object.values(a)[0]
  )[0];
}

getPopularToy(toysRequested);

console.log(`The most popular toy is <TOY> with <NUMBER> requests.`);
