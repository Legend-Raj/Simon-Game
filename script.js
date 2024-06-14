let gameseql = [];
let userseql = [];
const btncol = ["yellow", "red", "green", "blue"];
let level = 0;
let started = false;
const lvl = document.querySelector("p");
let ins=document.querySelector(".Instructions");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function() {
    if (!started) {

      startGame();
    } else {
      const userChosenColor = this.id;
      userseql.push(userChosenColor);
      btnblink(this);
      checkAnswer(userseql.length - 1);
    }
  });
});

document.addEventListener("keypress", function() {
  if (!started) {
    startGame();
  }
});

function startGame() {

  level = 0;
  ins.textContent=" ";
  started = true;
  gameseql = [];
  userseql = [];
  lvl.textContent = "Level " + level;
  nextSequence();
}

function btnblink(btn) {
  const originalColor = btn.style.backgroundColor;
  btn.style.backgroundColor = 'white';
  setTimeout(function() {
    btn.style.backgroundColor = originalColor;
  }, 200);
}

function nextSequence() {
  userseql = [];
  level++;
  lvl.textContent = "Level " + level;
  const rnd = Math.floor(Math.random() * 4);
  const rndnum = document.querySelector("#" + btncol[rnd]);
  btnblink(rndnum);
  gameseql.push(btncol[rnd]);
}

function checkAnswer(currentLevel) {
  if (userseql[currentLevel] === gameseql[currentLevel]) {
    if (userseql.length === gameseql.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    lvl.textContent = "Game Over! Press Any Color to Restart";
    startOver();
  }
}

function startOver() {
  started = false;
}
