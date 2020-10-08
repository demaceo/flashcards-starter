const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  // it.skip('should instantiate new Turn', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //
  //   round.takeTurn('sea otter');
  //
  //   expect(round.deck).to.be.equal([card1, card2, card3]);
   // expect(round.turn.card.id).to.equal(card1.id);
  // });

  it('should have the current card as the first card in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns whenever a guess has been made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it('should change the currentCard', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter');

    expect(round.card.id).to.equal(card2.id);
  });

  it('should evaluate guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');

    expect(round.turn.evaluateGuess()).to.equal(true);
  });

  it('should start off with an empty array of incorrectGuesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses.length).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should not store a correct guess in the incorrectGuesses array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');

    expect(round.incorrectGuesses.length).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should store an incorrect guess in the incorrectGuesses array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('pug');

    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should return feedback if guess is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');

    expect(round.turn.giveFeedback()).to.equal('correct!');
  });

  it('should return feedback if guess is incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('spleen');

    expect(round.turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should calculate percent of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('squirrel');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');

    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should end a round with a message', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('squirrel');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');

    round.endRound();

    expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`);
  });
});
