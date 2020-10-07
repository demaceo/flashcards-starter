class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = new Card();
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (evaluateGuess() === true) {
      return "correct!"
    } else {
      return "incorrect!"
    }
  }
}

module.exports = Turn;
