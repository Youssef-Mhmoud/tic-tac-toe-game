let turn = "X";
let title = document.querySelector(".title");
let square = [];

function end(num1, num2, num3) {
  title.innerHTML = `${square[num1]} Winner`;
  document.getElementById(`item${num1}`).style.backgroundColor = "#4caf50";
  document.getElementById(`item${num2}`).style.background = "#4caf50";
  document.getElementById(`item${num3}`).style.background = "#4caf50";

  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById(`item${i}`).innerHTML;
  }

  // Horizental
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    end(1, 2, 3);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[7] != ""
  ) {
    end(7, 8, 9);
  }

  // Vertical
  else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[3] != ""
  ) {
    end(3, 6, 9);
  }

  // Cross
  else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[3] != ""
  ) {
    end(3, 5, 7);
  } else if (
    square[1] &&
    square[2] &&
    square[3] &&
    square[4] &&
    square[5] &&
    square[6] &&
    square[7] &&
    square[8] &&
    square[9] != ""
  ) {
    title.innerHTML = "Draw";
    setInterval(() => {
      title.innerHTML += ".";
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}

function game(id) {
  let element = document.getElementById(id);

  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";

    turn = "O";
    title.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";

    turn = "X";
    title.innerHTML = "X";
  }
  winner();
}

const squaresEl = document.querySelectorAll(".square");

squaresEl.forEach((square) => {
  square.addEventListener("click", (e) => {
    e.target.classList.add("rotate");
  });
});

// Dark mode

const body = document.body;
const darkBtn = document.querySelector(".dark-mode");

darkBtn.addEventListener("click", (e) => {
  localStorage.setItem("isDarkMode", true);
  body.classList.toggle("dark");
  
  if (body.className !== "dark") {
    localStorage.setItem("isDarkMode", false);
  }
});

if (localStorage.getItem("isDarkMode") === "true") {
  body.classList.toggle("dark");
}
