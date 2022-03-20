//create an array to hold the questions and answers
// match answers with the questions
// append questions to the page after quiz start
// add coutndown timer

const startButton = document.querySelector("#start-btn");
const questionElement = document.getElementById ("question")
let questionIndex


const questions = [
    { question: "Commonly used data types DO not Include:",
        answer: [
            {text: "alerts", correct: true }
            {text: "strings", correct: false}
            {text: "booleans", correct: false}
        ]
    // "The condition in an if / else statement is enclosed with _.",
    // "Arrays in JavaScript can be used to store _.",
    // "A very useful tool used durin development and debugging for printing content in the debugger is:",
    // "String values must be enclosed withnin _ when being assigned to variables."
    }]


//crate a function to start the quiz




function startQuiz() {
    questionIndex = 0

}

//create a function to start next question

function nextQuestion() {
    showQuestion([questionIndex])
}

//create a function to select an answer

function showQuestion() {
    questionElement.innerText.question.question
}

//create local storage to hold the high scores


startButton.addEventListener('click', startQuiz);