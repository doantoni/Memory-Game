const img1 = "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img2 = "https://images.unsplash.com/photo-1597926660900-dd5107ee4c65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img3 = "https://images.unsplash.com/photo-1560659245-ea431e0154a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img4 = "https://images.unsplash.com/photo-1588057078850-c7853b9188f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img5 = "https://images.unsplash.com/photo-1607213964100-9bb1c772a6a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img6 = "https://images.unsplash.com/photo-1576343026224-d8a9ff43b2c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img7 = "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img8 = "https://images.unsplash.com/photo-1603013032833-58c2d9f875b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img9 = "https://images.unsplash.com/photo-1535393857990-03242fe70580?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img10 = "https://images.unsplash.com/photo-1570250363652-0d8340128223?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img11 = "https://images.unsplash.com/photo-1588361732075-e5e4a36c0d35?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img12 = "https://images.unsplash.com/photo-1511282491208-d9b80e3deaee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFuaW1hbHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

let chosenImgs = [];

let resetBtn = document.querySelector("button");


const cards = document.querySelectorAll(".cards");


function randomImg(){
    let rand = Math.floor(Math.random() * 12) + 1;
    let randNum = "img" + rand;
    return randNum;
}

chosenImgs[0]=variableName();
chosenImgs[1]=variableName();
chosenImgs[2]=variableName();

let allImgs = chosenImgs;

allImgs.push(chosenImgs[0], chosenImgs[1], chosenImgs[2]);

function variableName (){
    let stringVar = eval(randomImg());
    return `"${stringVar}"`;
}


 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

shuffle(allImgs);

let compareCards = [];

for (let i=0; i<cards.length; i++){
  cards[i].addEventListener("click", function(){
    this.style.backgroundImage = `url(${allImgs[i]})`;
    if (cards[i].style.backgroundImage !== ""){
      compareCards.push(cards[i].style.backgroundImage);
    }
    if (compareCards.length == 2){
      if (compareCards[0] !== compareCards[1]){
        setTimeout(hideImgs, 1000);
        compareCards = [];
      } 
    }
    if (compareCards.length == 4) {
      if(compareCards[2] !== compareCards[3]){
        setTimeout(hideImgs, 1000);
        compareCards = [];
      }
    }
    
  }) 
 
    }
    
 function hideImgs (){
   for (i=0 ; i<cards.length ; i++){
     cards[i].style.backgroundImage = "none";
   }
 }
    
 function reset(){
   for(i=0; i<cards.length ; i++){
    cards[i].style.backgroundImage = "none";  
   }
   chosenImgs = [];
  
   randomImg();
   chosenImgs[0]=variableName();
chosenImgs[1]=variableName();
chosenImgs[2]=variableName();
allImgs = [];
allImgs = chosenImgs;
allImgs.push(chosenImgs[0], chosenImgs[1], chosenImgs[2]);
shuffle(allImgs);
compareCards = [];
 }

resetBtn.addEventListener("click", function(){
  reset();
});




