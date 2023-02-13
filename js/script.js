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
const continueBtn = document.querySelector(".continue");

const winDraw = document.querySelector(".win-draw");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

let turn = "X";
let currentO = 0;
let currentX = 0;

// -----------------------------------
const nameCont = document.querySelector(".name-cont");
const form3 = document.querySelector(".form");
const name1 = document.querySelector(".name-player1");
const name2 = document.querySelector(".name-player2");

const playerName1 = document.querySelector(".val1");
const playerName2 = document.querySelector(".val2");

form3.addEventListener("submit", function (e) {
  e.preventDefault();

  if (name1.value === "" || name2.value === "") return;
  playerName1.innerText = name1.value;
  playerName2.innerText = name2.value;

  nameCont.classList.add("hidden");
});
// -----------------------------------

// Choose player turn
const turnFunc = (letter, player0, player1) => {
  turn = letter;
  player0.classList.remove("player--active");
  player1.classList.add("player--active");
};

btnBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "X" && box.textContent == "") {
      box.textContent = turn;

      currentX++;
      turn0.textContent = currentX;
      turnFunc("O", player0, player1);
    } else if (turn === "O" && box.textContent == "") {
      box.textContent = turn;

      currentO++;
      turn1.textContent = currentO;
      turnFunc("X", player1, player0);
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

const removeHidden = function (...inputArr) {
  inputArr.forEach((ele) => ele.classList.remove("hidden"));
};

const winnerFunc = (num1, num2, num3) => {
  btnBoxes[num1].style.backgroundColor = "#4caf50";
  btnBoxes[num2].style.backgroundColor = "#4caf50";
  btnBoxes[num3].style.backgroundColor = "#4caf50";

  removeHidden(overlay, continueBtn, boxOpitons);

  if (btnBoxes[num1].textContent === "X") {
    winDraw.textContent = `${name1.value} is Winner 🏆`;
    score0El.textContent++;
  } else {
    winDraw.textContent = `${name2.value} is Winner 🏆`;
    score1El.textContent++;
  }
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
    removeHidden(boxOpitons, overlay);
    winDraw.textContent = "DRAW";
  }
};

// Reset
const resetFunc = () => {
  btnBoxes.forEach((box) => {
    box.textContent = "";
    box.style.backgroundColor = "#ffffff1a";
  });

  turn0.textContent = 0;
  turn1.textContent = 0;
  currentO = 0;
  currentX = 0;

  boxOpitons.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.querySelectorAll(".reset").forEach((btn) => {
  btn.addEventListener("click", function () {
    score0El.textContent = 0;
    score1El.textContent = 0;

    resetFunc();

    // Return Player X
    turnFunc("X", player1, player0);
  });
});

// Continue
continueBtn.addEventListener("click", resetFunc);
