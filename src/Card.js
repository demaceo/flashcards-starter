// const data = require('./data');
// const prototypeQuestions = data.prototypeData;
// const util = require('./util');

class Card {
  constructor(question, possibleAnswers, correctAnswer){
    this.id = Date.now();
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;
