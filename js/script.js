"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const btnBoxes = document.querySelectorAll(".box");

const turn0 = document.querySelector(".turn--0");
const turn1 = document.querySelector(".turn--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const boxOpitons = document.querySelector(".box-options");
const overlay = document.querySelector(".overlay");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

let turn = "X";
let currentO = 0;
let currentX = 0;

btnBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "X" && box.textContent == "") {
      box.textContent = turn;

      currentX++;
      turn0.textContent = currentX;
      turn = "O";
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
    } else if (turn === "O" && box.textContent == "") {
      box.textContent = turn;

      currentO++;
      turn1.textContent = currentO;
      turn = "X";
      player0.classList.add("player--active");
      player1.classList.remove("player--active");
    }

    win();
  });
});

const winCondition = (num1, num2, num3) => {
  return (
    btnBoxes[num1].textContent === btnBoxes[num2].textContent &&
    btnBoxes[num2].textContent === btnBoxes[num3].textContent &&
    btnBoxes[num1].textContent != ""
  );
};

const winnerFunc = (num1, num2, num3) => {
  btnBoxes[num1].style.backgroundColor = "#4caf50";
  btnBoxes[num2].style.backgroundColor = "#4caf50";
  btnBoxes[num3].style.backgroundColor = "#4caf50";
  boxOpitons.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".continue").classList.remove("hidden");
  document.querySelector(".win-draw").textContent =
    btnBoxes[num1].textContent === "X" ? "Player 1 Winner 🏆" : "Player 2 Winner 🏆";
  btnBoxes[num1].textContent === "X"
    ? score0El.textContent++
    : score1El.textContent++;
};

const draw = () => {
  return (
    btnBoxes[0].textContent &&
    btnBoxes[1].textContent &&
    btnBoxes[2].textContent &&
    btnBoxes[3].textContent &&
    btnBoxes[4].textContent &&
    btnBoxes[5].textContent &&
    btnBoxes[6].textContent &&
    btnBoxes[7].textContent &&
    btnBoxes[8].textContent
  );
};

const win = () => {
  if (winCondition(0, 1, 2)) {
    winnerFunc(0, 1, 2);
  } else if (winCondition(3, 4, 5)) {
    winnerFunc(3, 4, 5);
  } else if (winCondition(6, 7, 8)) {
    winnerFunc(6, 7, 8);
  } else if (winCondition(0, 4, 8)) {
    winnerFunc(0, 4, 8);
  } else if (winCondition(2, 4, 6)) {
    winnerFunc(2, 4, 6);
  } else if (winCondition(0, 3, 6)) {
    winnerFunc(0, 3, 6);
  } else if (winCondition(1, 4, 7)) {
    winnerFunc(1, 4, 7);
  } else if (winCondition(2, 5, 8)) {
    winnerFunc(2, 5, 8);
  } else if (draw()) {
    boxOpitons.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector(".win-draw").textContent = "DRAW";
  }
};

// Reset

document.querySelectorAll(".reset").forEach((btn) => {
  btn.addEventListener("click", function () {
    turn0.textContent = 0;
    turn1.textContent = 0;
    currentO = 0;
    currentX = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    for (let i = 0; i < btnBoxes.length; i++) {
      btnBoxes[i].textContent = "";
      btnBoxes[i].style.backgroundColor = "#333";
    }
    boxOpitons.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});

// Continue
document.querySelector(".continue").addEventListener("click", function () {
  turn0.textContent = 0;
  turn1.textContent = 0;
  currentO = 0;
  currentX = 0;
  for (let i = 0; i < btnBoxes.length; i++) {
    btnBoxes[i].textContent = "";
    btnBoxes[i].style.backgroundColor = "#333";
  }
  boxOpitons.classList.add("hidden");
  overlay.classList.add("hidden");
});
