//Global Variables
const btnEl = $('#quiz-btn');
const timer = $('#timer');
const nav = $('#header');
const main = $('#main');
const qContainer = $('#questions-container');
const answerButtonArea = $('#question');




// stopped at randomizeQuestions get random #



var quizQuestions = [{
        "question": "javascript is a ______ oriented programming language.",
        "answers": [
        {text: "object", correct: true},
        {text: "program", correct: false},
        {text: "functional", correct: false},
        {text: "prayer", correct: false},
]
    },
    {
        "question": "javascript is a ______ typed language.",
        "answers": [
            {text: "loosely", correct: true},
            {text: "false", correct: false},
            {text: "happy", correct: false},
            {text: "quickly", correct: false},
    ]
    },
    {
        "question": "[{'name:' 'bob'}]; is an example of a _________ object.",
        "answers": [
            {text: "nested", correct: true},
            {text: "bedded", correct: false},
            {text: "sleepy", correct: false},
            {text: "asynchronous", correct: false},
    ]
    }
];



btnEl.click(function (e) { 
    e.preventDefault();
    console.log('started');
    btnEl.hide();
    main.hide();
    qContainer.attr('class', 'd-flex flex-sm-fill'); 
    quizQuestions.forEach(question => {

    })
    randomizedQuestions = quizQuestions.sort(() => Math.random() * (quizQuestions.length))
});

function nextQuestion() {
    
}

//function populates questions and answer buttons in #main section
// function populateQuestions(arr) {
//     let firstRun = 0;
//     if (firstRun === 0) {
//         firstRun++;





//     } else {

//     }


// };


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

// btnEl.addEventListener('click', function () {
//     Countdown(60);

//     //Button Creation
//     var correctBtn = answerButtonArea.createElement('Button');
//     correctBtn.setAttribute("class", "btn btn-primary");

//     var wrongBtn1 = answerButtonArea.createElement('Button');
//     correctBtn.setAttribute("class", "btn btn-primary");

//     var wrongBtn2 = answerButtonArea.createElement('Button');
//     correctBtn.setAttribute("class", "btn btn-primary");

//     var wrongBtn3 = answerButtonArea.createElement('Button');
//     correctBtn.setAttribute("class", "btn btn-primary");
//     answerButtonArea.appendChild(correctBtn);
//     answerButtonArea.appendChild(wrongBtn1);
//     answerButtonArea.appendChild(wrongBtn2);
//     answerButtonArea.appendChild(wrongBtn3);

//     //populateQuestions(quizQuestions);

// });