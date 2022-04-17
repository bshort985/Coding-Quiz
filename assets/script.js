const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit")
const questionCardElement = document.getElementById ("question-card")
const questionElement = document.getElementById("question")
const answerBtnElement = document.getElementById("answer-buttons")
const timerElement = document.getElementById("timer")
const inputElement = document.getElementById("input-field")
const intElement = document.querySelector("#highScores");
const playerScores = JSON.parse(localStorage.getItem("playerScores")) || [];
const newScore = localStorage.getItem("score");
const maxPalyerScores = 5;
let score = 60;
let timer
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
   
 timer = setInterval(() => {
        score--;
        timerElement.textContent = score;
        if (score <= 0){
            clearInterval(timer)
            gameOver()
        }
        return;
        
    }, 1000);
    

    timerElement.textContent = score;
    startButton.classList.add("hide");
    questionIndex = 0;
    questionCardElement.classList.remove("hide");
    document.getElementById("restart").classList.add("hide");
    document.getElementById("scoreCard").classList.add("hide")
    document.getElementById("high-scores").classList.remove("hide")
    nextQuestion();
}

//create a function to start next question


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
        score += 10;
    }
    else {
        document.getElementById("alert").innerHTML = "Wrong";
        score -= 15;
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
    
    document.getElementById("input-field").classList.remove("hide");
    document.getElementById("game-over").innerHTML = "Your final score is: " + score;
    questionCardElement.classList.add("hide");
    clearInterval(timer);
}





//create local storage to hold the high scores

const submitInt = document.getElementById("int");
const submitIntBtn = document.getElementById("submit");

function inputName(){
    inputElement.classList.add("hide");
    document.getElementById("endGame").classList.remove("hide"); 
};

 

// when the high score button is clicked then the top 5 high scores



function showHighScores(){

    const intScore = {
        initials: submitInt.value,
        score: score
    }
    playerScores.push(intScore)
    playerScores.sort((a, b) => b.score - a.score)
    playerScores.splice(5)
    localStorage.setItem("playerScores", JSON.stringify(playerScores));
    document.getElementById("highScores").innerHTML = playerScores
    .map(intScore => {
        return (`<li>${intScore.initials}-${intScore.score}</li>`);
    })
    .join('')

    console.log(score)
    console.log(playerScores)

    

        document.getElementById("scoreCard").classList.remove("hide")
        document.getElementById("endGame").classList.add("hide");
        document.getElementById("high-scores").classList.add("hide");
        document.getElementById("restart").classList.remove("hide");
        
}

 function tryAgain() {
     window.location.assign("index.html")
 }


startButton.addEventListener('click', startQuiz);