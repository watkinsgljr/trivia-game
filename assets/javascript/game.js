
// Question Class -----------------------------------------------------------

class Questions {
    constructor(questionId, question, answerChoices, correctAnswer) {
        this.questionId = questionId;
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
        this.answered = false;
        this.answeredCorrectly = false;
        this.answeredIncorrectly = false;
    }

    get QuestionId() {
        return this.questionId;
    }

    get question() {
        return this.question;
    }

    get answerChoices() {
        return this.answerChoices;
    }

    get correctAnswer() {
        return this.correctAnswer;
    }

    get answered() {
        return this.answered;
    }

    get answeredCorrectly() {
        return this.answeredCorrectly;
    }

    get answeredIncorrectly() {
        return this.answeredIncorrectly;
    }

    answeredCorrectly() {
        this.answeredCorrectly = true;
        this.answered = true;
        answerCounter += 1;
        correctCounter += 1;
    }

    answeredIncorrectly() {
        this.answeredIncorrectly = true;
        this.answered = true;
        answerCounter += 1;
        incorrectCounter += 1;
    }
}

const question1 = new Questions(
    'one',
    'What color is my pants?',
    ['blue', 'red', 'brown', 'yellow'],
    'brown'
);

const question2 = new Questions(
    'two',
    'What color is the sky?',
    ['blue', 'red', 'brown', 'yellow'],
    'blue'
);

const question3 = new Questions(
    'three',
    'What color is the sky?',
    ['blue', 'red', 'brown', 'yellow'],
    'blue'
);

const question4 = new Questions(
    'four',
    'What color is the sky?',
    ['blue', 'red', 'brown', 'yellow'],
    'blue'

);

const question5 = new Questions(
    'five',
    'What color is the sky?',
    ['blue', 'red', 'brown', 'yellow'],
    'red'
);


console.log(question1)
console.log(question1.question)

let trivaGame
let questionArray = [question1, question2, question3, question4, question5];
let answeredQuestionsBank = [];
let randomizedQuestionsBank = [];
let answeredCounter = 0;
let correctCounter = 0;
let incorrectCounter = 0;
let currentQuestion;


//----------------------------------------------------FUNCTIONS------------------------------------------------------------

// Assign Current Question






// Load question
//setTimeout
function loadQuestion() {
    currentQuestion = questionArray[answeredCounter];
    $('#question').text(currentQuestion.question);
    $('#choice1').text(currentQuestion.answerChoices[0]);
    $('#choice2').text(currentQuestion.answerChoices[1]);
    $('#choice3').text(currentQuestion.answerChoices[2]);
    $('#choice4').text(currentQuestion.answerChoices[3]);
}

// Answer choices click event

$('.answer-choice').click(function() {
    if ($(this).val() === currentQuestion.correctAnswer)
      answeredCorrectly();
      else if ($('this') !== currentQuestion.correctAnswer)
        answeredIncorrectly();
    setTimeout(loadQuestion(), 3000);
});





























//----------------------------------------sources ------------------------------------------------------
//---------------------------------------CLASSES--------------------------------------------------------

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/introduction?action=resume_content_item
