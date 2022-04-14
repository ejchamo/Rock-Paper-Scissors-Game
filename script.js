function computerPlay() { 
    let word = ['Rock','Paper','Scissor'];
    let words = word[Math.floor(Math.random()*word.length)];
    return words;
}

// var playerscore = 0;
// var computerscore = 0;

// function game() {

//     for (i = 0; i < 5; i++) {
//       console.log(playRound(playerSelection, computerPlay(),playerscore, computerscore));
//       console.log(playerscore,computerscore);
//     }
   
// }


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

  const playerSelection = "rock";
console.log(playRound(playerSelection, computerPlay()));


function game() {
    let playerscore = 0;
    let computerscore = 0;
    let result;
    for (i = 0; i < 5; i++) {
      result = playRound(playerSelection, computerPlay());
        if (result.includes('win')){
            console.log(result + " the player's score is " + ++playerscore + " and the computer's score is " + computerscore);
        }
        else if (result.includes('tie')){
            console.log(result + " the player's score is " + playerscore + " and the computer's score is " + computerscore);
        }
        else {
            console.log(result + " the player's score is " + playerscore + " and the computer's score is " + ++computerscore);
        }
    
    }
    if (playerscore>computerscore){
        console.log( ' You win');
    }
    else {
        console.log( 'You lose');
    }
}

// function game() {
//     let playerscore = 0;
//     let computerscore = 0;
//     for (i = 0; i < 5; i++) {
//       console.log(playRound(playerSelection, computerPlay()).includes('win')) ?
//       console.log(playRound(playerSelection, computerPlay()) + " the player's score is " + ++playerscore + " and the computer's score is " + computerscore) : 
//       console.log(playRound(playerSelection, computerPlay()) + " the player's score is " + playerscore + " and the computer's score is " + ++computerscore);  
 
//     }
// }

