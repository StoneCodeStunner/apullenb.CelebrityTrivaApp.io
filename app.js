/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */
const STORE = {
  questions: [
    {
      question: 'What Is Dwayne Johnsons Net Worth?',
      answers: ['80 million', '120 million', '250 million', '320 million'],
      correctAnswer: 3,
    },
    {
      question: 'What Year Did Paul Walker Pass Away?',
      answers: ['2013', '2003', '2018', '2009'],
      correctAnswer: 0,
    },
    {
      question: 'Who Sings The Chicka Chicka Slim Shady Song?',
      answers: ['Drake', 'Lil Wayne', 'Eminem', '50 Cent'],
      correctAnswer: 2,
    },
    {
      question: 'What Is The Name Of The School In The Breakfast Club?',
      answers: [
        'Beverly High',
        'Shermer high',
        'Houston County High',
        'Montgomery High',
      ],
      correctAnswer: 1,
    },
    {
      question: 'In What Year Did Brad Pitt Turn 30 Years Old?',
      answers: ['2003', '2008', '1999', '2010'],
      correctAnswer: 0,
    },
    {
      question: 'Which Celebrity Is Known As JLo',
      answers: ['John Lennon', 'Jennifer Lopez', 'Jared Leto', 'Justin Long'],
      correctAnswer: 1,
    },
    {
      question: 'Who Was Named People Magazines Sexiest Man Alive In 1991?',
      answers: [
        'Brad Pitt',
        'Blake Shelton',
        'Patrick Swayze',
        'George Strait',
      ],
      correctAnswer: 2,
    },
    {
      question: 'What Is Drew Barrymores Real Middle Name?',
      answers: ['Beth', 'Mckenzie', 'Leah', 'Blyth'],
      correctAnswer: 3,
    },
    {
      question:
        'How Old Was Russell Crowe When He got His First Lead Role In A Film?',
      answers: ['18', '25', '22', '16'],
      correctAnswer: 1,
    },
    {
      question: 'Brothers Taylor, Isaac, and Zac make up which Band?',
      answers: ['ZZ Top', 'The Police', 'Hanson', 'Green Day'],
      correctAnswer: 2,
    },
  ],
  score: 0,
  currentQuestion: 0,
  guess: 0,
  started: false,
  hasFeedback: false,
};

function generateQuestionElements(answers) {
  let answerChoices = '';
  answers.forEach((answer, i) => {
    answerChoices += `<input type="radio" name="choice" value="${i}" id="${i}"/>
  <label for="${i}">${answer}</label><br/>`;
  });
  return answerChoices;
}

function generateQuizElementsString(
  question,
  answers,
  score,
  totalQuestions,
  questionNumber
) {
  let options = generateQuestionElements(answers);

  return `<p class="score">Score: ${score}/${totalQuestions}</p>
  <p class="progress">Questions ${questionNumber + 1} of ${totalQuestions}</p>
  <section id="quiz">
  <form>  
    <h2>${question}</h2>
    <fieldset id="choices" tabindex=0>${options}</fieldset>
    <input type="submit" value="Submit Answer" aria-label="Submit Answer" />
  </form>
</section>`;
}

function generateStartElementString() {
  return `<section id="start">
  <h2>Hello! Welcome To Celebrity Trivia!</h2>
  <button id="start-quiz">Start</button>
</section>`;
}

function generateFeedbackElementString(
  feedback,
  guess,
  answer,
  score,
  totalQuestions,
  questionNumber
) {
  let incorrectStyle = '';
  let guessString = `Your answer: ${guess}`;
  let answerString = ``;
  let output = `<p class="user-answer">${guessString}</p>
  <p class="correct-answer">${answerString}</p>`;

  if (feedback === 'Incorrect') {
    incorrectStyle = `<p class="Incorrect"><img src="images/jennifer.jpg">${answerString}</p>`;
  } else {
    output = `<p class="correct-answer"><img src="images/paul.jpg">${answerString}</p>`;
  }

  return `
  <p class="score">Score: ${score}/${totalQuestions}</p>
  <p class="progress">Question ${questionNumber + 1} of ${totalQuestions}</p>
  <section id="feedback">
  <h2> ${incorrectStyle}${feedback}</h2>
  ${output}
  <button id="next">Next Question</button>
</section>`;
}

function generateSummaryElementString(score, totalQuestions) {
  return `<section id="summary">
  <h2>Summary</h2>
  <p>Your score is ${score}/${totalQuestions}</p>
  <button id="restart">Restart Quiz</button>
</section>`;
}

function render() {
  let score = STORE.score;
  let totalQuestions = STORE.questions.length;
  let questionNumber = STORE.currentQuestion;
  let page = '';
  console.log(STORE.currentQuestion);
  console.log(STORE.questions.length);
  if (!STORE.started) {
    console.log(STORE.started);
    page = generateStartElementString();
  } else if (STORE.hasFeedback) {
    console.log('aa');
    let feedback = STORE.hasFeedback;
    let guess = STORE.guess;
    let answer = STORE.questions[STORE.currentQuestion].correctAnswer;
    page = generateFeedbackElementString(
      feedback,
      guess,
      answer,
      score,
      totalQuestions,
      questionNumber
    );
  } else if (STORE.currentQuestion < STORE.questions.length) {
    console.log('aaa');
    let question = STORE.questions[STORE.currentQuestion].question;
    let answers = STORE.questions[STORE.currentQuestion].answers;
    page = generateQuizElementsString(
      question,
      answers,
      score,
      totalQuestions,
      questionNumber
    );
  } else {
    console.log('aaaa');
    page = generateSummaryElementString(score, totalQuestions);
  }
  $('main').html(page);
}

/* listening to events */
function startQuiz() {
  $('main').on('click', '#start-quiz', () => {
    console.log('aaab');
    STORE.started = true;
    render();
  });
}

function submitChoice() {
  $('main').on('submit', '#quiz form', (e) => {
    e.preventDefault();
    if (!$('input[type="radio"]:checked').val()) {
      alert('No answer selected');
      return;
    }
    const answer = $('input[type="radio"]:checked').val();
    const question = STORE.questions[STORE.currentQuestion];
    if (Number(answer) === question.correctAnswer) {
      STORE.score = STORE.score + 1;
      STORE.hasFeedback = 'Correct';
    } else {
      STORE.guess = STORE.questions[STORE.currentQuestion].answers[answer];
      STORE.hasFeedback = 'Incorrect';
    }
    render();
  });
}

function nextQuestion() {
  $('main').on('click', '#next', () => {
    STORE.hasFeedback = false;
    STORE.currentQuestion = STORE.currentQuestion + 1;
    render();
  });
}

function restartQuiz() {
  $('main').on('click', '#restart', () => {
    STORE.started = false;
    STORE.score = 0;
    STORE.currentQuestion = 0;
    render();
  });
}

function main() {
  startQuiz();
  submitChoice();
  nextQuestion();
  restartQuiz();
  render();
}

$(main);
