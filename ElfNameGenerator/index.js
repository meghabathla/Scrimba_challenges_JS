const elfFirstNames = [
  "Aurora",
  "Blitzen",
  "Crispin",
  "Dazzle",
  "Evergreen",
  "Frost",
  "Glimmer",
  "Holly",
  "Icicle",
  "Joyful",
  "Kringle",
  "Luna",
  "Merry",
  "Nutmeg",
  "Olwen",
  "Pine",
  "Quill",
  "Razzle",
  "Sparkle",
  "Tinsel",
  "Umbra",
  "Vixen",
  "Whisk",
  "Xylo",
  "Yule",
  "Zippy",
];

const elfLastNames = [
  "Applecheeks",
  "Bells",
  "Candycane",
  "Dazzlebright",
  "Everbright",
  "Frostwhisk",
  "Gingersnap",
  "Hollyberry",
  "Icestorm",
  "Jovial",
  "Kindleflame",
  "Lightwhisper",
  "Merrysprout",
  "Nutcracker",
  "Oakenleaf",
  "Peppermint",
  "Quicksilver",
  "Raindrop",
  "Snowdust",
  "Twinkletoes",
  "Underwood",
  "Velvet",
  "Winterberry",
  "Xylospark",
  "Yuletide",
  "Zestwind",
];
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
const submitButton = document.querySelector(".generate-btn");
const orderListOfElfName = document.querySelector(".elf-names-list");

console.log(firstName, lastName);
submitButton.addEventListener("click", () => {
  const firstCharacter = firstName.value.trim()[0].toUpperCase();
  const lastCharacter = lastName.value.trim()[0].toUpperCase();

  console.log(firstCharacter, lastCharacter);

  if (firstCharacter && lastCharacter) {
    const newElfFisrtName = elfFirstNames.filter(
      (elfName) => elfName[0] === firstCharacter
    );
    const newElfLastName = elfFirstNames.filter(
      (elfName) => elfName[0] === lastCharacter
    );
    const newlistname = document.createElement("li");
    newlistname.textContent = `${newElfFisrtName} ${newElfLastName}`;

    orderListOfElfName.appendChild(newlistname);
    firstName.value = "";
    lastName.value = "";
  }
});
/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace).
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key
 */
