//Global Variables
var btnEl = document.getElementById('quiz-btn');
var timer = document.getElementById('timer');
var nav = document.getElementById('header');

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