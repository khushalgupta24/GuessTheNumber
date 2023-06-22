"use strict";

let Answer = Math.floor(Math.random() * (20 - 1 + 1) + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  Answer = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  console.log(Answer, "new answer");
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

console.log(Answer, "answer");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number found!");
  } else if (guess === Answer) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = Answer;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== Answer) {
    if (score > 1) {
      displayMessage(guess > Answer ? "📈 Too high!" : "📉 Too low!");
      score--;
      console.log(score, "score");
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
