


var deck = document.querySelectorAll(".card");
var start=document.getElementById("startImg").addEventListener("click",shuffle);
let InitialFlip = false;
let blocking = false;
let firstPick, secondPick;
let pairCounter = 0;
let missCounter = 0;

for (var i = 0; i <= 11; i++) {
  deck[i].addEventListener("click", flip);
}

function shuffle() {
  deck.forEach(card => {
    let randomSpot = Math.floor(Math.random() * 12);
    card.style.order = randomSpot;
    pairCounter=0;
  })
};



function flip() {
    if(blocking) { return;}
    if(this === firstPick) {return;}
     this.classList.add('flip');
     if (!InitialFlip) {
       InitialFlip = true;
       firstPick = this;
     }

     else {
       InitialFlip = false;
       secondPick = this;
       checkMatch(firstPick,secondPick);}
}

function checkMatch (firstPick,secondPick){

      if (firstPick.dataset.fruit === secondPick.dataset.fruit) {
              pairCounter += 1;
              firstPick.removeEventListener("click", flip);
              secondPick.removeEventListener("click", flip);
              reset();
          } else { 
            blocking=true;
            setTimeout (() =>{
            firstPick.classList.remove("flip");
                   secondPick.classList.remove("flip");
                   missCounter = 0;
                   blocking=false;
                   reset();
                  }, 1850 )}
}

function reset(){
  [InitialFlip, blocking] = [false,false];
  [firstPick,secondPick] = [null,null];

}






