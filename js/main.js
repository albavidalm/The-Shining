"use strict";

const slides = document.querySelector(".js-slides");
const button = document.querySelectorAll(".js-button");
const navigationRight = document.querySelector(".js-navigationRight");

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

/* FUTURE IMPROVEMENTS
function moveOneRight() {
  console.log("Click");
  let movement = -(100 / 7);
  slides.style.transform = `translateX(${movement}%)`;
}

navigationRight.addEventListener("click", moveOneRight);
*/
