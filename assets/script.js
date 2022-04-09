const startButton = document.getElementById("start-btn");
const questionCardElement = document.getElementById ("question-card")
const questionElement = document.getElementById("question")
const answerBtnElement = document.getElementById("answer-buttons")
let score = 60000;
let questionIndex


const questions = [
    { 
        question: "Commonly used data types DO not Include:",
            answer: [
                {text: "alerts", correct: true },
                {text: "strings", correct: false},
                {text: "booleans", correct: false},
                {text: "numbers", correct: false}
            ]
    },

    { 
        question: "The condition in an if / else statement is enclosed with _.",
            answer: [
                {text: "quotes", correct: false},
                {text: "curly brackets", correct: false},
                {text: "parenthesis", correct: true},
                {text: "square brackets", correct: false},
            ]
        },
    {
    question: "Arrays in JavaScript can be used to store _.", 
        answer: [
                {text: "numbers and strings", correct: false},
                {text: "otnher arrays", correct: false},
                {text: "booleans", correct: false},
                {text: "all of the above", correct: true},
            ]
    },
    
    {
    question: "A very useful tool used during development and debugging for printing content in the debugger is:", 
        answer: [
                {text: "JavaScript", correct: false},
                {text: "terminal/bash", correct: false},
                {text: "for loops", correct: false},
                {text: "console.log", correct: true},
            ]
    },
     
    {
    question: "String values must be enclosed withnin _ when being assigned to variables.", 
    answer: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false},
        ]
    },
    
]


// function to start the quiz


function startQuiz() {

    timer=setInterval(() => {
        score -= 1000
        if (score <= 0){
            gameOver()
            clearInterval(timer)
        }
      
    }, 1000);

    startButton.classList.add("hide");
    questionIndex = 0;
    questionCardElement.classList.remove("hide");
    nextQuestion();
}

//create a function to start next question

let timer
function nextQuestion() {
   

    document.getElementById("question").innerHTML = questions[questionIndex].question;
    document.getElementsByClassName("btn")[0].innerHTML = questions[questionIndex].answer[0].text;
    document.getElementsByClassName("btn")[1].innerHTML = questions[questionIndex].answer[1].text;
    document.getElementsByClassName("btn")[2].innerHTML = questions[questionIndex].answer[2].text;
    document.getElementsByClassName("btn")[3].innerHTML = questions[questionIndex].answer[3].text;
}



// create a function to select answer

function selectAnswer(e) {
   
    if (questions[questionIndex].answer[e].correct === true) {
        document.getElementById("alert").innerHTML = "Correct";
    }
    else {
        document.getElementById("alert").innerHTML = "Wrong";
        score -= 10000;
    }
    questionIndex++;
    if (questionIndex === questions.length){
        gameOver()
    }
    else{
    nextQuestion();
    }
}

function gameOver(){
    clearInterval(timer)
    document.getElementById("input-field").classList.remove("hide");
    document.getElementById("game-over").innerHTML = "Your final score is: " + score/1000;
}



//create local storage to hold the high scores


startButton.addEventListener('click', startQuiz)