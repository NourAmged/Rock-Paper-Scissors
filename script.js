
let player = 0;
let ai = 0;

function getPlayerInput() {
    let selectedButtonId = null;

    const buttons = document.querySelectorAll('div.bottoms > button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedButtonId = button.id;
            updateUI(selectedButtonId);
            if(player === 5 || ai === 5){
                retryButton();
            }
        });
    });

    return () => selectedButtonId;
}

function game(playerChoice) {
    const RPS = ["rock", "paper", "scissors"];
    let aiChoice = RPS[Math.floor(Math.random() * 3)];

    if (playerChoice === aiChoice) {
        
    } else if (
        (playerChoice === "rock" && aiChoice === "scissors") ||
        (playerChoice === "paper" && aiChoice === "rock") ||
        (playerChoice === "scissors" && aiChoice === "paper")
    ) {
        player++;
    } else {
        ai++;
    }

    return aiChoice;
}

function imgUpdate(pChoice, aChoice){
    const playerImg = document.querySelector('#Pimg');
    const aiImg = document.querySelector('#Cimg');

    if(pChoice ==='rock')
        playerImg.src = 'images/PR.png';
    else if (pChoice ==='paper')
        playerImg.src = 'images/PP.png';
    else if(pChoice ==='scissors')
        playerImg.src = 'images/PS.png';

    if(aChoice ==='rock')
        aiImg.src = 'images/CR.png';
    else if (aChoice ==='paper')
        aiImg.src = 'images/CP.png';
    else if(aChoice ==='scissors')
        aiImg.src = 'images/CS.png';
}

function massage(p,a){
    const massage = document.querySelector('.massage');
    if(p === a)
        massage.textContent = `It's a tie`;
    else if(p === 'rock' && a === 'scissors')
        massage.textContent = `You win Rock beats Scissors`;
    else if(p === 'paper' && a === 'rock')
        massage.textContent = `You win Paper beats Rock`;
    else if(p === 'scissors' && a === 'paper')
        massage.textContent = `You win Scissors beats Paper`;

    else if(a === 'rock' && p === 'scissors')
        massage.textContent = `You loose Rock beats Scissors`;
    else if(a === 'paper' && p === 'rock')
        massage.textContent = `You loose Paper beats Rock`;
    else if(a === 'scissors' && p === 'paper')
        massage.textContent = `You loose Scissors beats Paper`;
    
}

function retryButton(){
    const msg = document.querySelector('.finalmassage');

    msg.innerHTML = `<button id='retry'>Try again?</button>`;

    if(player === 5){
        msg.innerHTML += `<p style='text-align: center;'>You wins</p>`;
    }
    else{
        msg.innerHTML += `<p style='text-align: center;'>You Loose</p>`;
    }

    const playerScore = document.querySelector('#playerScore');
    const AIScore = document.querySelector('#AiScore');

    const buttons = document.querySelectorAll('div.bottoms > button');

    const btn = document.querySelector('#retry');

    buttons.forEach((button) =>{
        button.disabled = true;
    });


    btn.addEventListener('click',() =>{
        ai = 0;
        player = 0;
        msg.innerHTML='';
        playerScore.textContent = '0';
        AIScore.textContent = '0'

        buttons.forEach((button) =>{
            button.disabled = false;
        });
    });


}

function updateUI(playerChoice) {
    let aiChoice = game(playerChoice);
    const playerScore = document.querySelector('#playerScore');
    const AIScore = document.querySelector('#AiScore');
    playerScore.textContent =`${player}`;
    AIScore.textContent =`${ai}`;

    imgUpdate(playerChoice,aiChoice);
    massage(playerChoice, aiChoice);
}

getPlayerInput();


