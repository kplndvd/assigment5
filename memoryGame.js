


var deck=['1a.png','1b.png','2a.png','2b.png','3a.png','3b.png','4a.png','4b.png','5a.png','5b.png','6a.png','6b.png'];



function shuffle(deck){
    var i=deck.length;
    var temp; 
    var randomIndex;
    while(i!==0) {
      randomIndex=Math.floor(Math.random()*i);
      i -=1;
      temp=deck[i];
      deck[i]=deck[randomIndex];
      deck[randomIndex]=temp;
    }
    return deck;
}

for(var i=1;i<=12;i++){
document.getElementById("c"+i).addEventListener("click", function(){ alert("check")});
}

function flip(firstCard,secondCard){
    if(firstCard===secondCard){
        document.getElementById(firstCard).style.display="block";
        document.getElementById(secondCard).style.display="block";
        score+=5;
    }
} 