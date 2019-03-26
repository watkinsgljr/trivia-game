
// Question Class -----------------------------------------------------------

class Questions {
    constructor(questionId, question, answerChoices, correctAnswer) {
        this._questionId = questionId;
        this._question = question;
        this._answerChoices = answerChoices;
        this._correctAnswer = correctAnswer;
        this._answered = false;
        this._answeredCorrectly = false;
        this._answeredIncorrectly = false;
    }

    get QuestionId() {
        return this._questionId;
    }

    get question() {
        return this._question;
    }

    get answerChoices() {
        return this._answerChoices;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    get answered() {
        return this._answered;
    }

    get answeredCorrectly() {
        return this._answeredCorrectly;
    }

    get answeredIncorrectly() {
        return this._answeredIncorrectly;
    }

    wasAnsweredCorrectly() {
        this._answeredCorrectly = true;
        this._answered = true;
        answeredCounter++;
        correctCounter++;
    }

    wasAnsweredIncorrectly() {
        this._answeredIncorrectly = true;
        this._answered = true;
        answeredCounter++;
        incorrectCounter++;
        // $(this).css('$(this)' + '-border', 'red');
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
    'What year was Kobe born?',
    ['1999', '1978', '1963', '1982'],
    '1978'
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


// function gameOver()
let trivaGame;
let questionArray = [question1, question2, question3, question4, question5];
let answeredQuestionsBank = [];
let randomizedQuestionsBank = [];
let answeredCounter = 0;
let correctCounter = 0;
let incorrectCounter = 0;
// let currentQuestion;
let currentQuestion = questionArray[answeredCounter];
console.log(currentQuestion)
console.log(currentQuestion.wasAnsweredCorrectly)

//----------------------------------------------------FUNCTIONS------------------------------------------------------------

// Assign Current Question
//Moved assignment code to first line of loadQuestion function




// Load question
//setTimeout
function loadQuestion() {
    if (answeredCounter < questionArray.length) {
    currentQuestion = questionArray[answeredCounter];
    $('#question').text(currentQuestion.question);
    $('#choice1').text(currentQuestion.answerChoices[0]);
    $('#choice2').text(currentQuestion.answerChoices[1]);
    $('#choice3').text(currentQuestion.answerChoices[2]);
    $('#choice4').text(currentQuestion.answerChoices[3]);
    runTimer();
    } else gameOver();
}

// Answer choices click event

$('.answer-choice').click(function() {
    stopTimer();
    let selection = $(this).clone().children().remove().end().text();
    if (selection === currentQuestion.correctAnswer)
      currentQuestion.wasAnsweredCorrectly();

      else if (selection !== currentQuestion.correctAnswer)
      currentQuestion.wasAnsweredIncorrectly();
 
    setTimeout(loadQuestion(), 1000);
    console.log(answeredCounter)
    console.log(correctCounter)
    console.log(incorrectCounter)
});


//----------------------------Fade incorrrect answers function------------------------

//----------------------------------------TIMER----------------------------------------------------

//-----------------------------------Timer variables-----------------------------------------------------------
var number = 10;
var intervalId;

//-----------------------------------The run timer function------------------------------------------------------------------
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //---------------------------------The decrement function-------------------------------------------------------
  function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stopTimer();
      alert("Time Up!");
      loadQuestion();
    }
  }

  //---------------------------------The stop timer function-------------------------------------------------------
  function stopTimer() {
    clearInterval(intervalId);
  }

  runTimer();

  //--------------------------------END GAME----------------------------------------------------------------------------













//----------------------------------------sources ------------------------------------------------------
//---------------------------------------CLASSES--------------------------------------------------------

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/introduction?action=resume_content_item

//---------------------------------------TIMER--------------------------------------------------------------

// Timers classwork interval-solved
