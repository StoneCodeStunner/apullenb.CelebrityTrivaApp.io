const correctAnswerIcon = "http://billionairesbayou.net/wp-content/uploads/2016/10/man-with-check-sign-05-1-300x300.png";
const wrongAnswerIcon= "http://ppcplans.com/wp-content/uploads/2011/09/negative_keywords-man.jpg";
const warningIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7WP9E3LDA10kP2Rk2enw-_kjI-iJd4kny8yH2kTrPR8hgrwtBg";

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



let questionsCount = questionsArray.length; 

//this function handles the button that takes you to the first page of the quiz
function handleStartClick(){
	$('.js-start-button').on('click',function(event){
		console.log("handleStartClick() ran");
		$('.progress-section').show();
		$('.start-section').hide();
		$('.end-section').hide();
		$('.quiz-box').fadeIn("slow");
		renderQuizBox(); 
})
}
function renderQuizBox() {
// Displays the Question, answer choices, progress, and score
  renderQuestionsCount();
  renderQuestion();
  renderScore();
}
function renderScore() {
// Calculates your score so far
$(".progress-section .score-card").text(`${score}/${questionsCount}`);
}

function renderQuestionsCount() {
// Displayed above the question and tells how many questions are left
$(".progress-section .question-count").text(`Question ${questionCounter+1} of ${questionsCount}`);
}

function renderQuestion() {
// Displays the next question

  $(".questions-form").text(questionsArray[questionCounter].question);
  $(".questions-form #option-one").val(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").val(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").val(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").val(questionsArray[questionCounter].optionfour);
   
  $(".questions-form #option-one").next().text(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").next().text(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").next().text(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").next().text(questionsArray[questionCounter].optionfour);
}


function handleSubmitAnswer() {
// Submits and validates the selected option, displays popup, initiates the check answer function
$('.js-submit-button').on('click',function(event){
  console.log("handleSubmitAnswer() ran");
  let selectedOption = $('input[type=radio]:checked').val();
  if(selectedOption === undefined) {
     displayPopup(false, selectedOption);
  }
  else{
   //reset radio button
    $('input[type=radio]:checked').attr('checked',false);
    checkAnswer(selectedOption);
  }
});
}

function checkAnswer() {
// Compares the input to the correct answer
// If the correct answer is selected, the popup with the correct answer is displayed
// If the wrong answer is selected, the incorrect answer popup is displayed with the correct answer
let rightAnswer = questionsArray[questionCounter].correctAnswer;
  
  if(selected === rightAnswer){
    score++;
    displayPopup(true, rightAnswer);
  } 
  else{
   displayPopup(false, rightAnswer);
  }
}
function displayPopup() {
// Contains the code for displaying the popup
$('.feedback-section').show();
if(statusFlag){
  $(".popup-box img").attr("src",correctAnswerIcon);
  $(".popup-box #popup-text").text("You are right!");
  $(".popup-box").show();
}
else{
    if(answer === undefined) {
       questionCounter--;
       $(".popup-box img").attr("src",warningIcon);
       $(".popup-box #popup-text").text('Please select an option');
     }
    else{
       $(".popup-box img").attr("src",wrongAnswerIcon);
      $(".popup-box #popup-text").text(`Sorry, the correct answer was: ${answer}`);
    }
  }
   $(".popup-box").show();
}

function handlePopupClose() {
//  Has a button to continue to the next question which displays the next question
// If it is the final question, the button will lead to the quiz results
$('.js-close-button').on('click', function(event){
  console.log("handlePopupClose() ran");
  $('.popup-box').hide();
  $('.feedback-section').hide();
  $('.quiz-box').hide().fadeIn();
  questionCounter++;
  if(questionCounter < questionsArray.length) {
     $('.quiz-box').fadeIn();
     renderQuizBox();
  }
  else{
    $('.quiz-box').hide();
    displayFinalScore();
  }
});
}
function displayFinalScore() {
// Displays the final score and has a button to restart the quiz
$('.end-section').fadeIn(1000);
$('.end-section h4').text(`Your Score is: ${score}/${questionsCount}`);
$('.correct .count' ).text(score);
$('.wrong .count').text(questionsCount - score);
resetQuiz();
}
function resetQuiz() {
// Resets the score and progress counter
questionCounter = 0;
score = 0;
}
function handleStartOver(){
  $('.js-startover-button').on('click',function(event){
    console.log("handleStartOver() ran");
    $('.end-section').hide();
    $('.quiz-box').fadeIn();
    renderQuizBox();
  });
}

function init(){
  $('.end-section').hide();
  $('.progress-section').hide();
  $('.quiz-box').hide();
  $('.feedback-section').hide();
  handleStartClick();
  handleSubmitAnswer();
  handlePopupClose();
  handleStartOver()
}

$(init());
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