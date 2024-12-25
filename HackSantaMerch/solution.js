//task-1: if I write this code in the browser console. I can make these changes.
function hackButton() {
  const button = document.createElement("button");
  button.textContent = "Click me";
  button.style = "position: absolute; z-index: 1; bottom: 80px; right: 100px";
  button.onclick = () => {
    console.log("You have been hacked 🏴‍☠️");
  };
  document.body.appendChild(button);
}
hackButton();

//task-2:

document.querySelector(".prod-title").textContent = "Don not buy this";
