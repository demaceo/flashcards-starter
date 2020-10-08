const Card = require('../src/Card');

class Deck {
  constructor(cards){
    this.card = cards
  }
  countCards(){
    return this.card.length
  };
}

module.exports = Deck;
