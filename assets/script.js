
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        multChoice: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        multChoice: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        multChoice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        multChoice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        multChoice: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

var timerEl = document.getElementById('countdown');
var startTimer = document.querySelector("#startTimerButton");
var timeLeft = 75;

function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            timerEl.textContent = "GAME OVER";
        }
    }, 1000);

    // Begin quiz when timer starts
    spawnQuiz(qIndex);
}

var score = 0;
var ulCreate = document.createElement("ul");
var qIndex = 0;
var qDiv = document.querySelector("#qDiv");

function spawnQuiz(qIndex) {
    // clear HTML elements to make room for question and multChoice
    qDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and multChoice
        var spawnQuestion = questions[qIndex].question;
        var spawnMultChoice = questions[qIndex].multChoice;
        qDiv.textContent = spawnQuestion;
    }
    // New li's for multChoice 
    spawnMultChoice.forEach(function (newLi) {
        var listItem = document.createElement("li");
        listItem.textContent = newLi;
        qDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (check));
    })
}

var timePenalty = 10;

function check(event) {
    var element = event.target;

    if (element.matches("li")) {

        var feedbackDiv = document.createElement("div");
        feedbackDiv.setAttribute("id", "feedbackDiv");

        if (element.textContent == questions[qIndex].answer) {
            score++;
            feedbackDiv.textContent = "Correct!";
        } else {
            timeLeft = timeLeft - timePenalty;
            feedbackDiv.textContent = "Nope!";
        }
    }

    qIndex++;

    if (qIndex >= questions.length) {
        gameOver();
        feedbackDiv.textContent = "You got  " + score + "/" + questions.length + " right!";
    } else {
        spawnQuiz(qIndex);
    }
    qDiv.appendChild(feedbackDiv);
}
var timeInterval = 0;
function gameOver() {
    qDiv.innerHTML = "";
    timerDiv.innerHTML = "";

    // Header
    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "Game Over!"
    // Paragraph
    var newP1 = document.createElement("p");
    newP1.setAttribute("id", "newP1");

    qDiv.appendChild(newH1);
    qDiv.appendChild(newP1);

    // Score
    if (timeLeft >= 0) {
        var timeScore = timeLeft;
        var newP2 = document.createElement("p");
        clearInterval(timeInterval);
        newP1.textContent = "Score: " + timeScore;

        qDiv.appendChild(newP2);
    }

    // Input Initials
    var newP3 = document.createElement("p");
    newP3.setAttribute("id", "initialsP");
    newP3.textContent = "Initials: ";
    qDiv.appendChild(newP3)

    var inputI = document.createElement("input");
    inputI.setAttribute("type", "text");
    inputI.setAttribute("id", "initials");
    inputI.textContent = "";
    qDiv.appendChild(inputI);

    // Submit Button
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit");
    submitBtn.textContent = "Submit";
    qDiv.appendChild(submitBtn);

    // High Score Page Feeder
    submitBtn.addEventListener("click", function () {
        var initials = newP3.value;

        if (initials === null) {
            alert("Please enter valid initials!");

        } else {
            var scoreFinal = {
                initials: initials,
                score: timeScore
            }
            console.log(scoreFinal);
            var allHighscores = localStorage.getItem("allHighscores");
            if (allHighscores === null) {
                allHighscores = [];
            } else {
                allHighscores = JSON.parse(allHighscores);
            }
            allHighscores.push(scoreFinal);
            var newScore = JSON.stringify(allHighscores);
            localStorage.setItem("allHighscores", newScore);

            window.location.replace("./highScore.html");
        }
    });
}

startTimer.onclick = countdown;


