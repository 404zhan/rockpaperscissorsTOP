

    let humanScore=0;
    let computerScore=0;

     const b1 = document.getElementById("button1");
     const b2 = document.getElementById("button2");
     const b3 = document.getElementById("button3");
     b1.addEventListener("click", ()=>{
        const playerSelection = b1.textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
     });
     b2.addEventListener("click", ()=>{
        const playerSelection = b2.textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
     });
     b3.addEventListener("click", ()=>{
        const playerSelection = b3.textContent;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
     });

     const resPara = document.querySelector('.result1');
     const scorePara = document.querySelector('.result2');
     const choicePara = document.querySelector('.result3');
     const finalPara = document.querySelector('.result4');

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
    const playRound = function playRound(humanChoice, computerChoice){
        let hc=humanChoice.toLowerCase();
        let cc=computerChoice.toLowerCase();
        choicePara.textContent = "Your Choice: "+hc.toUpperCase()+" ; "+"Computer's Choice: "+cc.toUpperCase();

        if(computerScore==5 && humanScore<5){
            finalPara.textContent = `Computer has won this round by ${computerScore-humanScore} points`;
            return;
        }
        else if(humanScore==5 && computerScore<5){
            finalPara.textContent = `You have won this round by ${humanScore-computerScore} points`;
            return;
        }
        else if(humanScore==5 && computerScore==5){
            finalPara.textContent = `This round has been a draw`;
            return;
        }

        if(hc===cc){
         resPara.textContent = `The ongoing score is Computer's: ${computerScore} Your: ${humanScore}`;
         scorePara.textContent = "Who cares its a draw!";
        }
        else if((hc=="rock"&&cc=="paper")||(hc=="paper"&&cc=="scissors")||(hc=="scissors"&&cc=="rock")){
         computerScore++;
         resPara.textContent = `The ongoing score is Computer's: ${computerScore} Your: ${humanScore}`;
         scorePara.textContent = "You lose!";
        }
        else {
         humanScore++;
         resPara.textContent = `The ongoing score is Computer's: ${computerScore} Your: ${humanScore}`;
         scorePara.textContent = "You Won!";
        }
     }
     




