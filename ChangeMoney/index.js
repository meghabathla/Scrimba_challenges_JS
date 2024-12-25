// Santa needs your help to figure out if he has enough money to give everyone change!
// Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

// Good luck and happy coding!!

const potQty = {
  5: 0,
  10: 0,
  20: 0,
};

function correctChangeFromSanta(bills) {
  let isPassed = true;

  //[5,5,10,10,20]
  bills.forEach((note) => {
    if (note === 5) {
      potQty[note] = potQty[note] + 1; // 5: 2
    } else if (note === 10) {
      potQty[note] = potQty[note] + 1; // 10: 2

      if (potQty["5"] > 0) {
        potQty["5"] = potQty[note] - 1; //5: 0
      } else {
        isPassed = false;
      }
    } else if (note === 20) {
      console.log(potQty);
      potQty[note] = potQty[note] + 1; // 20: 1

      if (potQty["10"] > 0 && potQty["5"] > 0) {
        potQty["5"] = potQty[note] - 1;
        potQty["10"] = potQty[note] - 1;
      } else if (potQty["5"] >= 3) {
        potQty["5"] = potQty[note] - 3;
      } else {
        isPassed = false;
      }
    }
  });

  return isPassed;
}

// if get 5 as money--> keep it
// if get 10 as money you should have notes of 5
//if get 20 as money you should have notes of 10, 5

// You can leave this code as is, this will simply console.log() different text depending on if the test case returns true or false. Feel free to add additional test cases if you would like!

// Should return true
if (correctChangeFromSanta([5, 5, 5, 10, 20])) {
  // %: 2, 10: 1, 20
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}

// Should return false
if (correctChangeFromSanta([5, 5, 10, 10, 20])) {
  console.log("Nice job Santa, everyone got their correct change!");
} else {
  console.log(
    "Looks like you have some work to do Santa, and bring some money next time!"
  );
}
