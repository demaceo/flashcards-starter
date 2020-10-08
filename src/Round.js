const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.card = this.deck.cards[0];
    this.turn = "";
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.card;
  };
  
  takeTurn(guess) {
    this.turn = new Turn(guess, this.card);
    this.deck.cards.shift();
    this.card = this.deck.cards[0];
    if(this.turn.evaluateGuess() === false) {
      this.incorrectGuesses.unshift(this.turn.card.id);
    };
    this.turns += 1;
    return this.turn.giveFeedback();
  };
};

module.exports = Round;
