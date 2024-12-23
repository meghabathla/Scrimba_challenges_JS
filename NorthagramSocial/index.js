/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/

import { feedData } from "./data.js";

const avatarContainer = document.querySelector(".feed-avatars");
const avatarFeaturesContainer = document.querySelector(".feed-images");
const loader = document.querySelector(".ux-loading");
let currentIntervalId = null;

let currentAvatarIndex = undefined;
let currentFeatureIndex = undefined;

const goToNextFeature = () => {
  console.log(
    `currentAvatarIndex: ${currentAvatarIndex}, currentFeatureIndex: ${currentFeatureIndex}`
  );

  if (currentAvatarIndex === undefined || currentFeatureIndex === undefined) {
    clearInterval(currentIntervalId);
    return;
  }

  const avatarLength = feedData.length;
  const featuresLength = feedData[currentAvatarIndex].features.length;

  const updatedFeatureIndex = currentFeatureIndex + 1;
  if (updatedFeatureIndex < featuresLength) {
    currentFeatureIndex = updatedFeatureIndex;
  } else if (currentAvatarIndex + 1 < avatarLength) {
    // Update class for current avatar
    avatarContainer.children[currentAvatarIndex].classList.remove("highlight");
    avatarContainer.children[currentAvatarIndex + 1].classList.add("highlight");
    currentAvatarIndex = currentAvatarIndex + 1;
    currentFeatureIndex = 0;
  } else {
    avatarFeaturesContainer.innerHTML = "";
    avatarContainer.children[currentAvatarIndex].classList.remove("highlight");
    currentAvatarIndex = undefined;
    currentFeatureIndex = undefined;
  }

  if (currentAvatarIndex !== undefined && currentFeatureIndex !== undefined) {
    renderFeatureImage();
  }
};

const removeLoader = () => {
  if (loader) {
    loader.classList.remove("ux-loading");
    loader.textContent = "";
  }
};

const onAvatarClick = (e) => {
  removeLoader();
  // Clear the interval if there is any existing interval going on
  if (currentIntervalId) {
    clearInterval(currentIntervalId);
  }
  // update the current avatar index
  const avatar = e.target;
  currentAvatarIndex = Number(avatar.dataset.index);
  currentFeatureIndex = 0;
  avatar.classList.add("highlight");

  renderFeatureImage();
  currentIntervalId = setInterval(goToNextFeature, 1500);
};

const renderFeatureImage = () => {
  avatarFeaturesContainer.innerHTML = "";

  const feature = feedData[currentAvatarIndex].features[currentFeatureIndex];

  const avatarStatus = document.createElement("div");
  avatarStatus.style.backgroundImage = `url('./images/${feature.imageUrl}')`;
  avatarStatus.classList.add("feature-image");
  avatarFeaturesContainer.appendChild(avatarStatus);
};

const renderAvatars = () => {
  if (avatarContainer) {
    feedData.forEach((avatarDetails, index) => {
      const avatar = document.createElement("div");
      avatar.style.backgroundImage = `url('./images/${avatarDetails.avatarUrl}')`;
      avatar.classList.add("avatar");
      avatar.dataset.index = index;
      avatarContainer.appendChild(avatar);
      avatar.addEventListener("click", onAvatarClick);
    });
  }
};

// Render the avatars
renderAvatars();
