
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
        showOutcomeContainer();
        $('#gif-holder').append();
        $('#brain-fart-tag').text('Brain Smart!!')
        this._answeredCorrectly = true;
        this._answered = true;
        answeredCounter++;
        correctCounter++;
        setTimeout(loadQuestion, 3000);
        
    }

    wasAnsweredIncorrectly() {
        showOutcomeContainer();
        $('#brain-fart-tag').text('Brain Fart!!')
        $('#correct-answer-share').text('The correct answer is: ' + "\"" + currentQuestion.correctAnswer + "\"");
        this._answeredIncorrectly = true;
        this._answered = true;
        answeredCounter++;
        incorrectCounter++;
        // $('#gif-holder').css('background-image', 'url(' + ../images/brain-fart.gif + ')');
        setTimeout(loadQuestion, 3000);
        // $(this).css('$(this)' + '-border', 'red');
    }

    TimeExpired() {
        showOutcomeContainer();
        $('#brain-fart-tag').text('Brain Fart!!')
        $('#correct-answer-share').text('The correct answer is: ' + "\"" + currentQuestion.correctAnswer + "\"");
        this._answeredIncorrectly = true;
        this._answered = true;
        answeredCounter++;
        incorrectCounter++;
        // $('#gif-holder').css('background-image', 'url(' + ../images/brain-fart.gif + ')');
        setTimeout(loadQuestion, 3000);
        // $(this).css('$(this)' + '-border', 'red');
    }
}


const question1 = new Questions(
    'one',
    'It does not matter how slowly you go as long as...?',
    ['you do not stop.', 'you are talented.', 'you are doing better than your circle.', 'you have help.'],
    'you do not stop.'
);

const question2 = new Questions(
    'two',
    'The best time to plant a tree was 20 years ago.  The second best time...?',
    ['is tomorrow morning.', 'is never because you missed your chance.', 'was yesterday.', 'is right now.'],
    'is right now.'
);

const question3 = new Questions(
    'three',
    'Big jobs usually go to the man/woman who prove..?',
    ['has the best network.', 'they are smart and talented.', 'their ability to outgrow small ones.', 'the hardest worker.'],
    'their ability to outgrow small ones.'
);

const question4 = new Questions(
    'four',
    'Life is _ what happend to you and _ how you react to it?',
    ['10% ; 90%', '50% ; 50%', '30% ; 70%', '90% ; 10%'],
    '10% ; 90%'

);

const question5 = new Questions(
    'five',
    'Opportunity is missed by most people because...?',
    ['only the top percenters get access to opportunity.', 'it is dressed in overalls and looks like work.', 'life should be fun.', 'you must be trained to see the opportunity in situations.'],
    'it is dressed in overalls and looks like work.'
);

//---------------------GLOBAL VARIABLES--SOME VARIABLES NOT NEEDED NOW BUT WILL BE BENEFICIAL WHEN I RANDOMIZE QUESTIONS ANS ANSWERS------------------------

let trivaGame;
let questionArray = [question1, question2, question3, question4, question5];
let answeredQuestionsBank = [];
let randomizedQuestionsBank = [];
let answeredCounter = 0;
let correctCounter = 0;
let incorrectCounter = 0;
let currentQuestion = questionArray[answeredCounter];


  //---------------------PAGE TRANSITIONS------------------------------------------------------------------------

  function showStartContainer() {
    $('#start-container').show();
    $('#feedback-container').hide();
    $('#container').hide();
    $('#outcome-container').hide();
  }


  function showMainContainer() {
    $('#start-container').hide();
    $('#feedback-container').hide();
    $('#container').show();
    $('#outcome-container').hide();
  }


  function showAnswerCotainer() {
    $('#start-container').hide();
    $('#feedback-container').hide();
    $('#container').hide();
    $('#outcome-container').hide();
  }


  function showFeedbackContainer() {
    $('#start-container').hide();
    $('#feedback-container').show();
    $('#container').hide();
    $('#outcome-container').hide();
  }

  function showOutcomeContainer() {
    $('#start-container').hide();
    $('#feedback-container').hide();
    $('#container').hide();
    $('#outcome-container').show();
  }


//----------------------------------------------------FUNCTIONS------------------------------------------------------------


//---------------START BUTTON--------------------------

$('#start-button').click( function() {
    loadQuestion();
});

$('#start-over-button').click( function() {
    answeredCounter = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    showStartContainer();
});


//--------------------------------------------------------- Load question------------------------------------------------------------------------------

const loadQuestion = function loadQuestion() {
    showMainContainer();
    if (answeredCounter < questionArray.length) {
        currentQuestion = questionArray[answeredCounter];
        $('#question').text(currentQuestion.question);
        $('#choice1').text(currentQuestion.answerChoices[0]);
        $('#choice2').text(currentQuestion.answerChoices[1]);
        $('#choice3').text(currentQuestion.answerChoices[2]);
        $('#choice4').text(currentQuestion.answerChoices[3]);
        runTimer();
    } else {
        gameOver();
    }
}

// -------------------------------------------------Answer choices click event-------------------------------------------------------------------------

$('.answer-choice').click(function () {
    stopTimer();
    let selection = $(this).text();
    if (selection === currentQuestion.correctAnswer) {
        // $(this).parent().css('background', 'linear-gradient(to right, green, green)');
        currentQuestion.wasAnsweredCorrectly();

    } else if (selection !== currentQuestion.correctAnswer) {
        // $(this).parent().css('background', 'linear-gradient(to right, maroon, red)');
        currentQuestion.wasAnsweredIncorrectly();
    }

});


//----------------------------------------TIMER----------------------------------------------------

//-----------------------------------Timer variables-----------------------------------------------------------
var number = 30;
var intervalId;

//-----------------------------------The run timer function------------------------------------------------------------------
function runTimer() {
    number = 30;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //---------------------------------The decrement function-------------------------------------------------------
  function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stopTimer();
      currentQuestion.TimeExpired();
      loadQuestion();
    }
  }

  //---------------------------------The stop timer function-------------------------------------------------------
  function stopTimer() {
    clearInterval(intervalId);
  }

  

  //--------------------------------END GAME----------------------------------------------------------------------------

  function gameOver() {
    showFeedbackContainer();
    if (correctCounter >= 4) {
        $('#feedback-tag').text('Great Job!');
    } else {
        $('#feedback-tag').text('Not very good!'); 
    }
    $('#feedback-summary').text('You scored ' + correctCounter + ' out of ' + answeredCounter + '.');
  }













//----------------------------------------sources ------------------------------------------------------
//---------------------------------------CLASSES--------------------------------------------------------

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/introduction?action=resume_content_item

//---------------------------------------TIMER--------------------------------------------------------------

// Timers classwork interval-solved

//---------------------------------------OTHER-----------------------------------------------------------------------
// JQuery Documentation
