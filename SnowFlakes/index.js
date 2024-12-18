const snowGlobe = document.querySelector(".snow-globe");

function generateRandomNumber(min = 10, max = 30) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSnowflake() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerText = "❄️";

  const size = `${generateRandomNumber(10, 30)}px`;
  snow.style.fontSize = size;
  const position = `${generateRandomNumber(0, 100)}%`;
  snow.style.left = position;
  const duration = `${generateRandomNumber(1000, 3000)}ms`;
  snow.style.animationDuration = duration;
  snowGlobe.appendChild(snow);

  setTimeout(() => {
    snow.classList.add("fall");
  }, 0);
  setTimeout(() => {
    snow.remove();
  }, 3000);
  /* 

Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css
*/
}

setInterval(createSnowflake, 100); // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/
