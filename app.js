/**
 * Example store structure
 */
const questionBank = {
 
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function handleStartButton()
//this function handles the button that takes you to the first page of the quiz


function renderQuizBox()
// Displays the Question, answer choices, progress, and score

function renderScore()
// Calculates your score so far

function renderQuestionCount()
// Displayed above the question and tells how many questions are left

function renderQuestion()
// Displays the next question

function handleSubmitAnswer()
// Submits and validates the selected option, displays popup, initiates the check answer function

function checkAnswer()
// Compares the input to the correct answer
// If the correct answer is selected, the popup with the correct answer is displayed
// If the wrong answer is selected, the incorrect answer popup is displayed with the correct answer

function displayPopup()
// Contains the code for displaying the popup

function handlePopupClose()
//  Has a button to continue to the next question which displays the next question
// If it is the final question, the button will lead to the quiz results

function displayFinalScore()
// Displays the final score and has a button to restart the quiz

function restartQuiz()
// Resets the score and progress counter

function fromStart()

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

//html template 
// contains the code for the question form and submit button

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)