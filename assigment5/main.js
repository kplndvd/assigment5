

let firstPick, secondPick;
var deck = document.querySelectorAll(".card");   

let InitialFlip = false;
let blocking = false;

var pairCounter=0;
var missCounter=0;

var backgroundMusic = document.getElementById("bgMusic");

var start = document.getElementById("startImg").addEventListener ("click",startGame); 

   function startGame(){
    for(i=0; i<12;i++){
      deck[i].classList.remove("flip");
      deck[i].addEventListener("click", flip);
    }
    
    setTimeout(() => {shuffle()},900);
    pairCounter=0;
    document.getElementById("totalMatches").innerHTML="Matches Score:" + pairCounter; 
    missCounter=0;
    document.getElementById("totalMisses").innerHTML="Misses: " + missCounter;
    backgroundMusic.play();
  };

function shuffle() {
  deck.forEach(card => {
    let randomSpot = Math.floor(Math.random() * 12);
    card.style.order = randomSpot;
    pairCounter = 0;
  })
};



function flip() {
  if (blocking) { return; }
  if (this === firstPick) { return; }
  this.classList.add('flip');
  if (!InitialFlip) {
    InitialFlip = true;
    firstPick = this;
  }

  else {
    InitialFlip = false;
    secondPick = this;
    checkMatch(firstPick, secondPick);
  }
}

function checkMatch(firstPick, secondPick) {

  if (firstPick.dataset.fruit === secondPick.dataset.fruit) {

    pairCounter += 1;
    document.getElementById("totalMatches").innerHTML="Matches Score:" + pairCounter;

    firstPick.removeEventListener("click", flip);
    secondPick.removeEventListener("click", flip);
    if (pairCounter === 1) { setTimeout(() => { document.getElementById("id01").style.display="block";}, 700); }
    reset();
  } else {


    blocking = true;
    setTimeout(() => {
      firstPick.classList.remove("flip");
      secondPick.classList.remove("flip");
      missCounter += 1;
      document.getElementById("totalMisses").innerHTML="Misses: " + missCounter;
      blocking = false;
      reset();
    }, 890)
  }
}

function reset() {
  [InitialFlip, blocking] = [false, false];
  [firstPick, secondPick] = [0, 0];

}







