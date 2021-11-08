"use strict";
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const target = event.target;
    const relatedAnswerDiv = event.target.parentNode.nextElementSibling;
    const relatedAnswer = relatedAnswerDiv.querySelector(".answer");

    //Here I'm telling Javascript to look in the classList and match up the 2nd class in the array of classes
    if (target.classList[1] === relatedAnswer.classList[1]) {
      relatedAnswer.classList.toggle("hidden");
      console.log(relatedAnswer);
      if (relatedAnswer.classList[2] === "hidden") {
        target.style.fontWeight = "normal";
        target.style.color = "hsl(237, 12%, 33%)";
        //added a CSS style to the ::after pseudo-element so that it flips up and down;
        target.classList.remove("special");
      } else {
        target.style.fontWeight = "bold";
        target.style.color = "hsl(238, 29%, 16%)";
        target.classList.add("special");
      }
    }
  });
});
