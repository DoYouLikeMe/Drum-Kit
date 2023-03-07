"use strict";
import playList from "/player.js";

const audio = document.querySelector("audio");
const buttonWrapper = document.querySelector(".buttons-wrapper");
let previousButton;

const playSound = function (keyBoardCode) {
  if (previousButton) {
    previousButton.classList.remove("kit-button-active");
  }
  const currentButton = document.querySelector(
    `.kit-button[data-id="${keyBoardCode}"]`
  );
  if (!currentButton) return;
  previousButton = currentButton;
  currentButton.classList.add("kit-button-active");
  audio.currentTime = 0;
  const url = playList.find((sound) => sound.id === keyBoardCode).src;
  audio.src = url;
  audio.play();
};

const playSoundByKeyboard = function (e) {
  const idKey = e.key;
  playSound(idKey);
};

const playSoundByClick = function (e) {
  const idKey = e.target.closest(".kit-button").dataset.id;

  playSound(idKey);
};

buttonWrapper.addEventListener("click", playSoundByClick);

document.addEventListener("keydown", playSoundByKeyboard);
