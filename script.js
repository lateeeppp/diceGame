function randomDice() {
  let randomNumDice = Math.floor(Math.random() * 6) + 1;
  let randomNumDice2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + randomNumDice + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumDice2 + ".png");

  if (randomNumDice > randomNumDice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
  } else if (randomNumDice < randomNumDice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
