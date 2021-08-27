"use strict";

const slides = document.querySelector(".js-slides");
const button = document.querySelectorAll(".js-button");

button.forEach((eachButton, i) => {
  button[i].addEventListener("click", () => {
    let position = i;
    let movement = position * -(100 / 7);

    slides.style.transform = `translateX(${movement}%)`;

    button.forEach((eachButton, i) => {
      button[i].classList.remove("active");
    });

    button[i].classList.add("active");
  });
});
