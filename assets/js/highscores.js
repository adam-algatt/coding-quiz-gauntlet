
const resetScores = $('#reset-button');
const scoreList = $('#score-list');
//  const scoreInput = $('#score-input');
let transferScore;
// function to load localStorage (called by terminate() in quiz.js)
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

 // function to save score
//  function saveScore() {
//     let name = $('#score-input').value; 
//     console.log('saveScore() called');
// // set scores to what's in local storage or empty arr that high 
// //score objects can be pushed to 
// let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
   
// let highScore = {
//       score: score,
//       initials: name
//     };
//     // add highscore to scores arr then add scores arr to localStorage
// scores.push(highScore);
// window.localStorage.setItem('scores', JSON.stringify(scores))
// location.reload;
//   }
//   $('#save-score-button').on('click', saveScore)
//   resetScores.click(() => {
//     console.log('reset called');
// window.localStorage.removeItem('scores');
// location.reload(); 
// showScores()
// }); 


// on reset button click remove high scores and reload page
 resetScores.click(() => {
    console.log('reset called');
window.localStorage.removeItem('scores');
location.reload(); 
showScores()
}); 
};

// $('#save-score-button').on('click', function () {
//         let name = $('#score-input').val(); 
//         console.log('saveScore() called');
//     // set scores to what's in local storage or empty arr that high 
//     //score objects can be pushed to 
//     let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
       
//     let highScore = {
//           score: transferScore,
//           initials: name
//         };
//         console.log(highScore);
//         // add highscore to scores arr then add scores arr to localStorage
//     scores.push(highScore);
//     window.localStorage.setItem('scores', JSON.stringify(scores))
//     location.reload;
// })




 