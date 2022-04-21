let playerscore = 0;
let computerscore = 0;

function computerPlay() { 
    let word = ['Rock','Paper','Scissor'];
    let words = word[Math.floor(Math.random()*word.length)];
    return words;
}


function playRound(playerSelection, computerSelection) {
      
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock') {
        return 'You tie rock with rock.';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        return 'You lose, paper beats rock.';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissor') {
        return 'You win, rock beats scissor.';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        return 'You win, paper beats rock.';
    } 
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper') {
        return 'You tie paper with paper.';
    } 
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissor') {
        return 'You lose, scissor beats paper.';
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'Rock') {
        return 'You lose, rock beats scissor.';
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'Paper') {
        return 'You win, scissor beats paper.';
    }
    else {
        return 'You tie scissor with scissor.';
    }

  }

  const answersection = document.querySelector('.answersection');

  const content = document.createElement('div');
  content.classList.add('content');
  

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

rock.addEventListener("click",function(){
    let result;
    result = playRound('rock',computerPlay());
    if (result.includes('win')){
        content.textContent = result + " the player's score is " + ++playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else if (result.includes('tie')){
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else {
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + ++computerscore;
        answersection.appendChild(content);
    }
});

paper.addEventListener("click",function(){
    let result;
    result = playRound('paper',computerPlay());
    if (result.includes('win')){
        content.textContent = result + " the player's score is " + ++playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else if (result.includes('tie')){
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else {
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + ++computerscore;
        answersection.appendChild(content);
    }
});

scissors.addEventListener("click",function(){
    let result;
    result = playRound('scissor',computerPlay());
    if (result.includes('win')){
        content.textContent = result + " the player's score is " + ++playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else if (result.includes('tie')){
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + computerscore;
        answersection.appendChild(content);
    }
    else {
        content.textContent = result + " the player's score is " + playerscore + " and the computer's score is " + ++computerscore;
        answersection.appendChild(content);
    }
});
