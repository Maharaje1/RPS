let tryAgain = "y";
do {
    let game = ["ROCK","PAPER","SCISSORS"];
let comp = Math.floor(Math.random()*game.length)



do {
    a = parseInt(prompt("Enter 0 for ROCK, 1 for PAPER and 2 for SCISSORS"));
} while (a>2 || isNaN(a) || 0>a);

let compCh = game[comp];
let userCh = game[a];

  if(a === comp){
    alert(`It's a draw, you both chose ${userCh}`)
  }
else if(!((a+1)%3 === comp)){
    alert(`You won! You chose ${userCh} and computer chose ${compCh}`);
} else {
    alert(`You lost! computer chose ${compCh} and you chose ${userCh}`);
}
tryAgain = prompt("Play Again? y/n")
} while (tryAgain.toLowerCase() === "y" || tryAgain.toLowerCase() ==="yes");
alert("Thanks for playing!");