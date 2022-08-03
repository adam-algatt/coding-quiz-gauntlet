// import showScores from "./highscores.js";
// const quizQuestions = require('./questions');
// const showScores = require('./highscores');



 let quizQuestions = [
  {
  "question": "javascript is a ______ oriented programming language.",
  "answers": [{
          text: "object",
          correct: true
      },
      {
          text: "program",
          correct: false
      },
      {
          text: "functional",
          correct: false
      },
      {
          text: "prayer",
          correct: false
      },
  ]
},
{
  "question": "javascript is a ______ typed language.",
  "answers": [{
          text: "loosely",
          correct: true
      },
      {
          text: "false",
          correct: false
      },
      {
          text: "happy",
          correct: false
      },
      {
          text: "quickly",
          correct: false
      },
  ]
},
{
  "question": "[{'name:' 'bob'}]; is an example of a _________ object.",
  "answers": [{
          text: "nested",
          correct: true
      },
      {
          text: "bedded",
          correct: false
      },
      {
          text: "sleepy",
          correct: false
      },
      {
          text: "asynchronous",
          correct: false
      },
  ]
},
{
"question": "How do you place a variable inside backticks",
"answers": [{
      text: "var: variableName",
      correct: false
  },
  {
      text: "${variableName}",
      correct: true
  },
  {
      text: "You can use the variable with no extra markings due to the backticks",
      correct: false
  },
  {
      text: "crying",
      correct: false
  },
]
}
];

const scoreInput = $('#score-input');

//Global Variables
const startBtn = $('#quiz-btn'); 
const main = $('#main');
const qContainer = $('#questions-container');
const answerButtonArea = $('#question');
const timeEl = $('#timer');
const navEl = $('#header');
const timerParent = $('#timer-parent');
const highScoresEl = $('#high-scores');
const scoreEl = $('#score-li');
const questionTitleEl = $('#the-question')
const questionDiv = $('#question')
const q1 = $('#0');
const q2 = $('#1');
const q3 = $('#2');
const q4 = $('#3');
const scoreContainer = $('save-score-container');
const buttonContainer = $('button-container');
const saveButton = $('#save-score-button');

let secondsRemaining = 60;
let clock; 
let quizInterval; 
let questionCount = 0; 
let score = 0; 

//function to stop and set location to highscores.html
function terminate() {
  // num === 1 ? score += 20 : score -= 30; 
  scoreEl.text(score);
//replace html data with highscores html data
clearInterval(quizInterval);
location.href = './highscores.html'
scoreInput.removeAttr('class');
// console.log(score);
questionTitleEl.attr('class', 'd-none');
qContainer.attr('class', 'd-none');
// scoreContainer.attr('class', 'highscore-container mx-auto text-center');
// buttonContainer.attr('class', 'button-container');
saveButton.on('click', saveScore());
console.log('end of terminate');
}

function iterateQuestions(num) {
questionCount++

if (num === 1) {
  score+=20
  secondsRemaining += 5
} else {
  score-=30
  secondsRemaining -= 10
}
highScoresEl.text(score);
console.log(questionCount);

if(questionCount !== 3) {
populateQuestion()
} else {
  terminate()
}
}




function populateQuestion() {
  // set question el text as quizQuestions.question 
 let answersArr = quizQuestions[questionCount].answers;
  let questionTitle = quizQuestions[questionCount].question; 
 let correct; 
//  let length = quizQuestions.length - 1; 
  questionTitleEl.text(questionTitle);
q1.text(answersArr[0].text);
q2.text(answersArr[1].text);
q3.text(answersArr[2].text);
q4.text(answersArr[3].text);
console.log(questionCount);
//added listener to parent of answer buttons, catches all button clicks
qContainer.on('click', 'button', function(e) {
  let answerIndex = e.target.id; 
  let correct = answersArr[answerIndex].correct;
  correct === true ? correct = 1 : correct = 0; 
  iterateQuestions(correct)
// if (questionCount === 3) {
// terminate()
//   } else {
//     iterateQuestions(correct)
//   }
 })

}



function changeTime(num) {
  num < 1 ? secondsRemaining-- : secondsRemaining -= 10;
  // console.log('changeTime');
  // setInterval(countdown, 1000)
  }

function countdown() {
  let count = 0; 
  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60; 
   //place zero in front of seconds when seconds is less than 10 
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  let displayTime = `0${minutes} : ${seconds}`;
  // timeEl.innerhtml = displayTime;
 timeEl.text(displayTime); 
  secondsRemaining <= 0 ? terminate() :  changeTime(0);
  count++;
}

function initQuiz() {
  let questionCount = 0; 
  timeEl.innertext = secondsRemaining;
  quizInterval = setInterval(countdown, 1000);
  populateQuestion(); 
};

 function showScores(score) {
  transferScore = score;
  // scoreInput.attr('class', '');
  scoreInput.attr('class', 'd-flex mx-auto');
  console.log(scoreInput); 
//check storage for scores, !scores return empty arr
console.log('show scores called');
let scores = JSON.parse(window.localStorage.getItem('scores')) || [];

// sort scores in decsending order
scores.sort((a, b) => {b.score - a.score})

//  add sorted scores to <ol> on highscores page
  scores.forEach(score => {
let scoreLi = scoreList.append(`<li>${score.initials} - ${score.score}</li>`)
})



// on reset button click remove high scores and reload page
resetScores.click(() => {
  console.log('reset called');
window.localStorage.removeItem('scores');
location.reload(); 
showScores()
}); 
};

function saveScore() {
  let name = $('#score-input').value; 
  console.log('saveScore() called');
// set scores to what's in local storage or empty arr that high 
//score objects can be pushed to 
let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
 
let highScore = {
    score: score,
    initials: name
  };

  // add highscore to scores arr then add scores arr to localStorage
scores.push(highScore);
window.localStorage.setItem('scores', JSON.stringify(scores))
location.reload();
showScores(score);

//switch to highscores.html here and remove previous switch location

}

startBtn.click(function(e) {
    console.log('started');
    startBtn.hide();
    main.hide();
    questionCount = 0; 
    qContainer.attr('class', 'd-flex flex-sm-fill');
  initQuiz();
  highScoresEl.attr('class', 'd-none');
  scoreEl.attr('class', '');
  scoreEl.text(`score: ${score}`);

  // terminate();
    console.log('end click event');
  })
