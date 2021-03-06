const img1 =
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img2 =
  "https://images.unsplash.com/photo-1597926660900-dd5107ee4c65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img3 =
  "https://images.unsplash.com/photo-1560659245-ea431e0154a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img4 =
  "https://images.unsplash.com/photo-1588057078850-c7853b9188f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img5 =
  "https://images.unsplash.com/photo-1607213964100-9bb1c772a6a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img6 =
  "https://images.unsplash.com/photo-1576343026224-d8a9ff43b2c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img7 =
  "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img8 =
  "https://images.unsplash.com/photo-1603013032833-58c2d9f875b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img9 =
  "https://images.unsplash.com/photo-1535393857990-03242fe70580?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img10 =
  "https://images.unsplash.com/photo-1570250363652-0d8340128223?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img11 =
  "https://images.unsplash.com/photo-1588361732075-e5e4a36c0d35?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const img12 =
  "https://images.unsplash.com/photo-1511282491208-d9b80e3deaee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

let chosenImgs = [];
let isTime = true;
let resetBtn = document.querySelector("button");
const cards = document.querySelectorAll(".cards");
let messageDisplay = document.querySelector("#message");
let tries = document.querySelector("#tries");
tries.textContent = `Tries: 0`;
let triesNum = 0;

//Array of random numbers (Fisher–Yates Shuffle)

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

let ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

//Random Images

chosenImgs[0] = "img" + ranNums[0];
chosenImgs[1] = "img" + ranNums[1];
chosenImgs[2] = "img" + ranNums[2];
chosenImgs[3] = "img" + ranNums[3];
chosenImgs[4] = "img" + ranNums[4];
chosenImgs[5] = "img" + ranNums[5];

function pushImgs() {
  chosenImgs.push(
    chosenImgs[0],
    chosenImgs[1],
    chosenImgs[2],
    chosenImgs[3],
    chosenImgs[4],
    chosenImgs[5]
  );
}

pushImgs();

for (i = 0; i < 12; i++) {
  chosenImgs[i] = eval(chosenImgs[i]);
}

function shuffleCards(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffleCards(chosenImgs);

let compareCards = [];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    if (isTime == true) {
      this.style.transform = "rotateY(180deg)";
      this.textContent = "";
      function compareImgs() {
        cards[i].style.backgroundImage = `url(${chosenImgs[i]})`;

        if (cards[i].style.backgroundImage !== "") {
          compareCards.push(cards[i].style.backgroundImage);
        }
        if (compareCards.length == 2) {
          if (compareCards[0] !== compareCards[1]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent = "Not quite";
            triesNum += 1;
          } else {
            triesNum += 1;
          }
          tries.textContent = `Tries: ${triesNum}`;
        }

        if (compareCards.length == 4) {
          if (compareCards[2] !== compareCards[3]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent = "Try again";
            triesNum += 1;
          } else {
            triesNum += 1;
          }
          tries.textContent = `Tries: ${triesNum}`;
        }

        if (compareCards.length == 6) {
          if (compareCards[4] !== compareCards[5]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent = "Too bad...";
            triesNum += 1;
          } else {
            triesNum += 1;
          }
          tries.textContent = `Tries: ${triesNum}`;
        }

        if (compareCards.length == 8) {
          if (compareCards[6] !== compareCards[7]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent = "Oh man, you were so close";
            triesNum += 1;
          } else {
            triesNum += 1;
          }
          tries.textContent = `Tries: ${triesNum}`;
        }

        if (compareCards.length == 10) {
          if (compareCards[8] !== compareCards[9]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent =
              "Oh come on, now you have to start over :(";
            triesNum += 1;
            tries.textContent = triesNum;
          } else {
            triesNum += 1;
            messageDisplay.textContent = "You've basically won now :D";
          }
          tries.textContent = `Tries: ${triesNum}`;
        }

        if (compareCards.length == 12) {
          if (compareCards[10] !== compareCards[11]) {
            isTime = false;
            setTimeout(hideImgs, 1500);
            compareCards = [];
            messageDisplay.textContent = "";
            triesNum += 1;
            tries.textContent = triesNum;
          } else {
            triesNum += 1;
            messageDisplay.textContent = "Congratulations, you won!";
          }
          tries.textContent = `It took you: ${triesNum} tries`;
        }
      }
      setTimeout(compareImgs, 300);
    }
  });
}

function hideImgs() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = "rotateY(0deg)";
    function flipBack() {
      cards[i].style.backgroundImage = "none";
      cards[i].textContent = i + 1;
    }

    setTimeout(flipBack, 300);

    isTime = true;
    messageDisplay.textContent = "";
  }
}

function reset() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform = "rotateY(0deg)";

    cards[i].style.backgroundImage = "none";
    cards[i].textContent = i + 1;
  }
  chosenImgs = [];
  chosenImgs[0] = "img" + ranNums[0];
  chosenImgs[1] = "img" + ranNums[1];
  chosenImgs[2] = "img" + ranNums[2];
  chosenImgs[3] = "img" + ranNums[3];
  chosenImgs[4] = "img" + ranNums[4];
  chosenImgs[5] = "img" + ranNums[5];
  pushImgs();
  for (i = 0; i < 12; i++) {
    chosenImgs[i] = eval(chosenImgs[i]);
  }

  shuffleCards(chosenImgs);
  compareCards = [];
  triesNum = 0;
  tries.textContent = `Tries: ${triesNum}`;
  messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function () {
  reset();
});
