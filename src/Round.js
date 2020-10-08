const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.card = this.deck.cards[0];
    this.turn = "";
    this.turns = 0;
    this.incorrectGuesses = [];
  };
};

module.exports = Round;
