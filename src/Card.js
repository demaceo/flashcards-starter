class Card {
  constructor(question, possibleAnswers, correctAnswer){
    this.id = Date.now();
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;
