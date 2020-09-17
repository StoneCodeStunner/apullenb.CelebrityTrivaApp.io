
const correctAnswerIcon = "http://billionairesbayou.net/wp-content/uploads/2016/10/man-with-check-sign-05-1-300x300.png";
const wrongAnswerIcon= "http://ppcplans.com/wp-content/uploads/2011/09/negative_keywords-man.jpg";
const warningIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7WP9E3LDA10kP2Rk2enw-_kjI-iJd4kny8yH2kTrPR8hgrwtBg";

let questionCounter = 0;
let score = 0;
let questionsArray = [
  {
    question: "1. You work on a Javascript project. How do you prompt users with messages and at the same time requesting user inputs?",
     optionone: "Alert()",
    optiontwo: "Display()",
    optionthree: "Prompt()",
    optionfour: "Confirm()",
    correctAnswer: "Prompt()"
  },
  {
     question: "2. Which of the following function of Array object reverses the order of the elements of an array?",
    optionone: "reverse()",
    optiontwo: "push()",
    optionthree: "reduceRight()",
    optionfour: "reduce()",
    correctAnswer: "reverse()"
  
  },
  {
     question: "3. What statement supplies the value of a function?",
    optionone: "continue",
    optiontwo: "return",
    optionthree: "cancel",
    optionfour: "valueOf",
    correctAnswer: "return"
    
  },
  {
    question: "4. How do you find the number with the highest value of x and y?",
    optionone: "Math.max(x, y)",
    optiontwo: "top(x, y)",
    optionthree: "ceil(x, y)",
    optionfour: "Math.ceil(x, y)",
    correctAnswer: "Math.max(x, y)"
  },
  {
    question: "5. Inside which HTML element do we put the JavaScript?",
    optionone: "<javascript>",
    optiontwo: "<js>",
    optionthree: " <scripting>",
    optionfour: "<script>",
    correctAnswer: "<script>"
  },
  {
    question: "6. How does a FOR loop start?",
    optionone: "for (i = 0; i <= 5)",
    optiontwo: "for (i = 0; i <= 5; i++)",
    optionthree: "for i = 1 to 5",
    optionfour: "for (i <= 5; i++)",
    correctAnswer: "for (i = 0; i <= 5; i++)"
  },
   {
    question: "7. How do you create a function in JavaScript?",
    optionone: "function = myFunction()",
    optiontwo: "function:myFunction()",
    optionthree: "function myFunction()",
    optionfour: "function - myFunction()",
    correctAnswer: "function myFunction()"
  },
  {
    question: "8. How to write an IF statement in JavaScript?",
    optionone: "if i = 5",
    optiontwo: "if i == 5 then",
    optionthree: "if i = 5 then",
    optionfour: "if (i == 5)",
    correctAnswer: "if (i == 5)"
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