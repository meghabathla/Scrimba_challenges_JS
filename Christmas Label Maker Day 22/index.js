import { addresses } from './addresses.js'
import { iconsArray } from './icons/index.js'; 
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const labelsContainer = document.querySelector('.labels-container');
const allowedAdressed = addresses.filter(address => address.isOnChristmasList);

const pickRandomNumber = (limit, exclude) => {
    const num = Math.floor(Math.random() * limit)
    if(exclude !== undefined && num === exclude) {
        return pickRandomNumber(limit, exclude);
    }
    return num;
}

const pickTwoRandomIcon = () => {
    const limit = iconsArray.length - 1;
    
    const firstIndex = pickRandomNumber(limit)
    const secondIndex = pickRandomNumber(limit, firstIndex)

    
    return {
        iconUrlOne: iconsArray[firstIndex].url,
        iconUrlTwo: iconsArray[secondIndex].url
    }
}

const addNewLabel = (labelObj) => {
    const labelContainer = document.createElement("div");
    
    labelContainer.classList.add("label");
    
    const { name, town, state, country } = labelObj;
    const { iconUrlOne,iconUrlTwo } = pickTwoRandomIcon();
    
    labelContainer.innerHTML = `
        <img class="icon" src="${iconUrlOne}" />
        <h3>${name}</h3>
        <p>${town, state}</p>
        <p>${country}<p>
        <img class="icon" src="${iconUrlTwo}" />
    `
    
    labelsContainer.appendChild(labelContainer);
}



allowedAdressed.forEach((obj)=>{
    addNewLabel(obj)
});