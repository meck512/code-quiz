// Declared variables
var score = 0;
var qIndex = 0;

var qContainer = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// Variables
var container = document.querySelector("#container");
var qContainer = document.querySelector("#questionsDiv");
// Time/Timer variables
var time = document.querySelector("#time");
// Timer
var timer = document.querySelector("#startTime");
var timeLeft = 76;
var timeInterval = 0;
var timePenalty = 10;
// Create new UL for qContainer
var ulCreate = document.createElement("ul");

// Start timer on click (function). Set timer to 75 seconds from 0 default. Display time remaining to user. When time runs out, end interval and notify user.
timer.addEventListener("click", function () {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            timeLeft--;
            time.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timeInterval);
                allDone();
                time.textContent = "GAME OVER";
            }
        }, 1000);
    }
    // return qIndex
    // **render instead (better for multiple items)
    render(qIndex);
});






