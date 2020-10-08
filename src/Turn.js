const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = new Card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "correct!"
    } else {
      return "incorrect!"
    }
  }
};

module.exports = Turn;
