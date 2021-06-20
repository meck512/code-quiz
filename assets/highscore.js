var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allHighscores = localStorage.getItem("allHighscores");
allHighscores = JSON.parse(allHighscores);

if (allHighscores !== null) {

    for (var i = 0; i < allHighscores.length; i++) {

        var listHighscores = document.createElement("li");
        listHighscores.textContent = allHighscores[i].initials + " " + allHighscores[i].score;
        highscore.appendChild(listHighscores);

    }
}