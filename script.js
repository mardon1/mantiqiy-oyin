'use strict';

/* console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'Correct Number');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

const elMessage = document.querySelector('.message');
const elCheck = document.querySelector('.check');
const elGuess = document.querySelector('.guess');
const elNumber = document.querySelector('.number');
const elScore = document.querySelector('.score');
const elAgain = document.querySelector('.again')
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

const displayMessage = function (message) {
  elMessage.textContent = message
}


elCheck.addEventListener('click', function () {
  const guess = Number(elGuess.value);
  
  if (!guess) {
    // elMessage.textContent = 'No number'
    displayMessage('No number')
    // when player wins
  } else if (guess === secretNumber) {
    // elMessage.textContent = 'Correct Number';
    displayMessage('Correct Number')
    elNumber.textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    elNumber.style.width = '30rem';

    if (elScore.textContent > highScore) {
      highScore = elScore.textContent;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (elScore.textContent > 1) {
      elScore.textContent--;
      // elMessage.textContent = guess > secretNumber ? 'Too high!' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
    } else {
      // elMessage.textContent = 'You lost the game';
      displayMessage('You lost the game');
      elScore.textContent = 0;
    }
    
  }
  //  else if (guess > secretNumber) {

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (elScore.textContent > 1) {
  //     elScore.textContent--;
  //     elMessage.textContent = 'Too low!';
  //   } else {
  //     elMessage.textContent = 'You lost the game';
  //     elScore.textContent = 0;
  //   } 
  // }
})

elAgain.addEventListener('click', function (s) {
  elScore.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222'
  elNumber.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // elMessage.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  elNumber.textContent = '?';
  elGuess.value = ''

})



