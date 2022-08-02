import { quizQuestions } from "./questions.js";
import { showScores } from "./highscores.js"
// import showScores from "./highscores.js";

//Global Variables
const startBtn = $('#quiz-btn'); 
const main = $('#main');
const qContainer = $('#questions-container');
const answerButtonArea = $('#question');
const timeEl = $('#timer');
const navEl = $('#header');
const timerParent = $('#timer-parent');
const highScoresEl = $('#high-scores');
const questionTitleEl = $('#the-question')
const questionDiv = $('#question')
const q1 = $('#0');
const q2 = $('#1');
const q3 = $('#2');
const q4 = $('#3');

let secondsRemaining = 60;
let clock; 
let quizInterval; 
let questionCount = 0; 
let score = 0; 

//function to stop and set location to highscores.html
function terminate(num) {
  num === 1 ? score += 20 : score -= 30; 
  highScoresEl.text(score);
//replace html data with highscores html data
clearInterval(quizInterval);
location.href = './highscores.html'
scoreInput.removeAttr('class');
console.log(score);
saveScore(score);
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
populateQuestion(); 
}




function populateQuestion() {
  // set question el text as quizQuestions.question 
 let answersArr = quizQuestions[questionCount].answers;
  let questionTitle = quizQuestions[questionCount].question; 
 let correct; 
 let length = quizQuestions.length - 1; 
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

if (questionCount === length) {
terminate(correct)
  } else {
    iterateQuestions(correct)
  }
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
// location.reload;
showScores(score);

}

startBtn.click(function(e) {
    console.log('started');
    startBtn.hide();
    main.hide();
    questionCount = 0; 
    qContainer.attr('class', 'd-flex flex-sm-fill');
  initQuiz();
  // highScoresEl.attr('class', 'd-none');
  highScoresEl.text(`score: ${score}`);

  // terminate();
    console.log('end click event');
  })
