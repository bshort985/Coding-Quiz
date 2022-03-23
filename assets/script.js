//create an array to hold the questions and answers
// match answers with the questions
// append questions to the page after quiz start
// add coutndown timer

const startButton = document.getElementById("start-btn");
const questionCardElement = document.getElementById ("question-card")
const questionElement = document.getElementById("question")
const answerBtnElement = document.getElementById("answer-buttons")
let currentQuestion

const questionIndex = [
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


//crate a function to start the quiz




function startQuiz() {
    console.log(questionIndex)
    console.log("started")
    startButton.classList.add("hide")
    currentQuestion = 0
    questionCardElement.classList.remove("hide")
    nextQuestion()

//create a function to start next question

function nextQuestion() {
    showQuestion([currentQuestion])
}



function showQuestion(question) {
    questionElement.innerText.question.question
}

//create a function to select an answer
//create local storage to hold the high scores


startButton.addEventListener('click', startQuiz)