// Saif Ismael Alkhezani

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var hasStarted = false;
var level = 0;

// level start

$(document).keydown(function() {
    if(!hasStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        hasStarted = true;
    } else if (level === 0 && !userClickedPattern.length === 0) {
        startOver();
    }
});
// choosing random color
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    console.log(gamePattern);

     $("#" + randomChosenColor).fadeIn(50).fadeOut(10).fadeIn(100);
     playSound(randomChosenColor);
   
}
// animation and sound for the buttons
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    } ,100);
    
}
// correct answer
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
        console.log("sequence finished!");

        setTimeout(function() {
            nextSequence();
        }, 1000);

    }
    // wrong answer
    } else {
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key to Restart")
        var wrongAnswer = new Audio("sounds/wrong.mp3");
        wrongAnswer.play();
        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

    
    }
// restart
function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    hasStarted = false;
}
// functions when clicked
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});



