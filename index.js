

const b1 = document.getElementById("button1");
const b2 = document.getElementById("button2");
const b3 = document.getElementById("button3");
b1.addEventListener('click', playRound());
b2.addEventListener('click', playRound);
b3.addEventListener('click', playRound);




var playGame=function(){
    let humanScore=0;
    let computerScore=0;
    function getComputerChoice(){
        let num = Math.floor(Math.random()*10);
        if(num>=0 && num<3){
            return "Rock";
        }
        else if(num>=3 && num<6) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }
    function getHumanChoice(){
        let userInput = prompt("Choose! ");
        return userInput;
    }
const playRound = function playRound(humanChoice, computerChoice){
        let hc=humanChoice.toLowerCase();
        let cc=computerChoice.toLowerCase();
        console.log("Your Choice: "+hc+" ; "+"Computer's Choice: "+cc);
        if(hc===cc){
         console.log("Who cares its a draw!");
        }
        else if((hc=="rock"&&cc=="paper")||(hc=="paper"&&cc=="scissors")||(hc=="scissors"&&cc=="rock")){
         computerScore++;
         console.log("You lose!");
        }
        else {
         humanScore++;
         console.log("You Won!");
        }
     }
     
     if(humanScore>computerScore){
        return `You've won the round by ${humanScore-computerScore} point!`;
     }
     else if(humanScore<computerScore){
        return `You've lost the round by ${computerScore-humanScore} point.`;
     }
     else{
        return `The is a draw, Computer's Score: ${computerScore} Your Score: ${humanScore}`;
     }
}

console.log(playGame());
