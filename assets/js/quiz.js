//Global Variables
var btnEl = document.getElementById('quiz-btn');
var timer = document.getElementById('timer');
var nav = document.getElementById('header');

var quizQuestions = [
{"question": "javascript is a ______ oriented programming language.",
"correct": "object",
"wrong": ["program", "function", "prayer"] 
},
{"question": "javascript is a ______ typed language.",
"correct": "loosely",
"false": ["false", "happy", "quickly"] 
},
{"question": "[{'name:' 'bob'}]; is an example of a _________ object.",
"correct": "nested",
"false": ["bedded", "sleepy", "asynchronous"] 
},

//function 

];
//starts countdown timer once start quiz btn is clicked
function Countdown(seconds) {
    let counter = seconds;

    const interval = setInterval(function () {
        timer.innerHTML = 'Time: ' + counter;
        nav.appendChild(timer);
        console.log(counter);
        counter--;

        if (counter < 0) {
            //function call which kills quiz and starts initial and score save 
            clearInterval(interval);
            console.log('boom');
        }
    }, 1000);
}

btnEl.addEventListener('click', function () {
    Countdown(60);

});