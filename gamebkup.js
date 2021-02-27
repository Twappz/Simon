var soundFx = new Audio("sounds/blue.mp3");

var audioBlue = new Audio("sounds/blue.mp3");
var audioYellow = new Audio("sounds/yellow.mp3");
var audioRed = new Audio("sounds/red.mp3");
var audioGreen = new Audio("sounds/green.mp3");
var errorSound = new Audio("sounds/wrong.mp3");

var level = 1;
var started = false;

var buttonColors = ["red", "blue", "yellow", "green"];

var gamePattern = [];
var playerClickedPattern = [];


// do{
$(document).keypress(function () {

    if (!started) {
        // $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});
// }while(!started);



playerTurn();

function reset() {

    $("#level-title").html("Level 0"); //reset game level
}

function playerTurn() {

    $(".btn").click(function () {



        var playerChosenColor = $(this).attr("id");
        playerClickedPattern.push(playerChosenColor);
        console.log("player " + playerClickedPattern);
        playSound(playerChosenColor);
        animatePress(playerChosenColor);
        checkPlayerGuess()

    });

}


function animatePress(press) {
    $("#" + press).addClass("pressed");
    setTimeout(function () {
        $("#" + press).removeClass("pressed");
    }, 100);
}


function playSound(sound) {
    $("#" + sound).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(buttonColors[randomNumber]);
    console.log(gamePattern);


    $("#level-title").html("Level " + level++); //increment game level
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    // var audio2 = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio2.play();

}


function checkPlayerGuess() {

    // comparing both arrays using stringify 
    if (JSON.stringify(playerClickedPattern) == JSON.stringify(gamePattern)) {
        console.log("True");

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {

            nextSequence();

        }, 1000);




    } else {
        console.log("False");
    }



}



function error() {

    errorSound.play();
    var i = 0;

}