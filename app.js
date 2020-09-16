/**
 * Example store structure
 */
let questionCounter = 0;
let score = 0;
const questionsArray = [
  {
    question: "1. What Is Dwayne Johnsons Net Worth?",
    one: "80 Million",
    two: "120 Million",
    three: "250 Million",
    four: "320 Million",
    correctAnswer: "320 Million"
  },
  {
    question: "2. Which Year Did Paul Walker Die?",
    one: "2013",
    two: "2003",
    three: "2018",
    four: "2009",
    correctAnswer: "2013"
  
  },
  {
    question: "3. Who Sings The Chicka Chicka Slim Shady Song?",
    one: "Drake",
    two: "Lil Wayne",
    three: "50 Cent",
    four: "Eminem",
    correctAnswer: "Eminem"
    
  },
  {
    question: "4. What Is The Name Of The School In The Breakfast Club?",
    one: "Beverly High",
    two: "Shermer High",
    three: "Houston County High",
    four: "Montgomery High",
    correctAnswer: "Shermer High"
  },
  {
    question: "5. In What Year Did Brad Pitt Turn 30 Years Old?",
    one: "2003",
    two: "2008",
    three: "1999",
    four: "2010",
    correctAnswer: "2003"
  },
  {
    question: "6. Which Celebrity Is Known As JLo?",
    one: "John Lennon",
    two: "Jennifer Lopez",
    three: "Jared Leto",
    four: "Justin Long",
    correctAnswer: "Jennifer Lopez"
  },
  {
    question: "7. Who Was People Magazine Sexiest Man Alive in 1991?",
    one: "Brad Pitt",
    two: "Blake Shelton",
    three: "Patrick Swayze",
    four: "George Strait",
    correctAnswer: "Patrick Swayze"
  },
  {
    question: "8. What Is Drew Barrymore's Real Middle Name?",
    one: "Beth",
    two: "Mckenzie",
    three: "Leah",
    four: "Blyth",
    correctAnswer: "Blyth"
  },
  {
    question: "9. How Old Was Russell Crowe When He Got His First Lead Role In A Film?",
    one: "18",
    two: "25",
    three: "20",
    four: "16",
    correctAnswer: "25"
  },
  {
    question: "10. Brothers Taylor, Isaac, Zac Make Up Which Band?",
    one: "ZZ Top",
    two: "The Police",
    three: "Hanson",
    four: "Green Day",
    correctAnswer: "Hanson"
  }
  ];


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