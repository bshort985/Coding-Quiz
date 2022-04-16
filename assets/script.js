const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit")
const questionCardElement = document.getElementById ("question-card")
const questionElement = document.getElementById("question")
const answerBtnElement = document.getElementById("answer-buttons")
const timerElement = document.getElementById("timer")
const inputElement = document.getElementById("input-field")
const intElement = document.querySelector("#highScores");
let score = 30;
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
            gameOver()
            clearInterval(timer)
            return;
        }
      
        
    }, 1000);
    

    timerElement.textContent = score;
    startButton.classList.add("hide");
    questionIndex = 0;
    questionCardElement.classList.remove("hide");
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
        score -= 5;
    }
    questionIndex++;
    if (questionIndex === questions.length){
        gameOver()
    }
    else{
    nextQuestion();
    }
    console.log(score)
}

function gameOver(){
    clearInterval(timer)
    document.getElementById("input-field").classList.remove("hide");
    document.getElementById("game-over").innerHTML = "Your final score is: " + score;
    questionCardElement.classList.add("hide");
}





//create local storage to hold the high scores

const submitInt = document.getElementById("int");
const submitIntBtn = document.getElementById("submit");

let initials 
let savedScore 

function storeData(){
    
    inputElement.classList.add("hide");
    document.getElementById("endGame").classList.remove("hide");
    localStorage.setItem("initials", submitInt.value);
    //localStorage.setItem("score", score)
   
    
};

// when the high score button is clicked then all the high scores will show

function showHighScores(){
        
        let listEl = document.createElement("li");
        listEl.innerText = localStorage.initials;
        intElement.appendChild(listEl);
        document.getElementById("scoreCard").classList.remove("hide")
        //document.getElementById("playerScore").innerHTML = localStorage.score;

       
      
        document.getElementById("endGame").classList.add("hide");
        document.getElementById("highScores").classList.remove("hide");
}


startButton.addEventListener('click', startQuiz);