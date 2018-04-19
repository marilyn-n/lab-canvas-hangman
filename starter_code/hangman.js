var hangman;

function Hangman() {
  this.words = ['casa', 'departmento', 'cabaña'];
  this.secretWord = 'cafeconleche';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function (str) {
  return 'hola';
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key) === -1;
};

Hangman.prototype.addCorrectLetter = function (i) {
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
