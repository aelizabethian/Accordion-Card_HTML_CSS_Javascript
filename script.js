"use strict";
const questions = document.querySelectorAll(".item");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const target = event.target;
    const closestArrow = event.target.nextElementSibling;
    function toggleA() {
      closestArrow.classList.toggle("up");
      if (closestArrow.classList.contains("up")) {
        target.style.fontWeight = "bold";
        target.style.color = "hsl(238, 29%, 16%)";
      } else {
        target.style.fontWeight = "normal";
        target.style.color = "hsl(237, 12%, 33%)";
      }
    }

    if (target.className === "question q0" || target.className === "arrow q0") {
      document.querySelector(".answer.q0").classList.toggle("hidden");
      toggleA();
    }
    if (target.className === "question q1" || target.className === "arrow q1") {
      document.querySelector(".answer.q1").classList.toggle("hidden");
      toggleA();
    }
    if (target.className === "question q2" || target.className === "arrow q2") {
      document.querySelector(".answer.q2").classList.toggle("hidden");
      toggleA();
    }
    if (target.className === "question q3" || target.className === "arrow q3") {
      document.querySelector(".answer.q3").classList.toggle("hidden");
      toggleA();
    }
    if (target.className === "question q4" || target.className === "arrow q4") {
      document.querySelector(".answer.q4").classList.toggle("hidden");
      toggleA();
    }
  });
});
