
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

function countdown() {
    var timeLeft = 75;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second';
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
    quiz(qIndex);
}






var score = 0;
var ulCreate = document.createElement("ul");
var qIndex = 0;
var qDiv = document.querySelector("#qDiv");

function quiz(qIndex) {
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

}





// *******************CURRENT BUG - cannot get new li elements to appear on page**********
function spawnToPage(qIndex) {
    // Clears existing data in HTML
    qDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // Loop through array
    for (var i = 0; i < questions.length; i++) {
        // Append question
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

function check(choice) {
    var userSubmit = choice.target;

    if (userSubmit.matches("li")) {
        var feedback = document.createElement("div");
        feedback.setAttribute("id", "feedback");
       
        if (userSubmit.textContent == questions[qIndex].answer) {
            score++;
            // ^how much is added to the score?
            feedback.textContent = "Correct!"
        } else {
            timeLeft = timeLeft - timePenalty;
            feedback.textContent = "Nope!"
        }
    }

}





startTimer.onclick = countdown;
