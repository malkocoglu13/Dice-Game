const diceImages = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const totalDuration = 5000; // 5 seconds
const imageChangeInterval = 100; // Change images every 100 milliseconds
const startTime = Date.now();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(diceImages);

let currentIndex = 0;

function changeDiceImageRandomly() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  if (elapsedTime >= totalDuration) {
    // Stop changing images after 5 seconds
    clearInterval(interval);
  } else {
    img1.src = diceImages[currentIndex];
    img2.src = diceImages[currentIndex];
    currentIndex = (currentIndex + 1) % diceImages.length;
  }
}

// Call the changeDiceImageRandomly function initially to set the initial image.
changeDiceImageRandomly();

// Set an interval to change the images randomly every 100 milliseconds
const interval = setInterval(changeDiceImageRandomly, imageChangeInterval);


function rollDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number 1-6 for dice 1
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number 1-6 for dice 2
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
      } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      } else {
        document.querySelector("h1").innerHTML = "Draw!";
      }
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Initial roll
rollDice();