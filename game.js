var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var playerClickedPattern = [];
var level = 0;
var started = false;


$(document).keypress(function () {

    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});

    $(".btn").click(function () {
        var playerChosenColor = $(this).attr("id");
        playerClickedPattern.push(playerChosenColor);
        playSound(playerChosenColor);
        animatePress(playerChosenColor);

        //decrement the array count to current for comparison with the players arrays of guesses
        checkPlayerGuess(playerClickedPattern.length - 1);

        console.log("player " + playerClickedPattern);

    });


function checkPlayerGuess(currentLevel) {

       //See if the player guessed the colors right
    if (gamePattern[currentLevel] === playerClickedPattern[currentLevel]) { 

      //See if the player has already guess all colors in the array correctly 
      //if not yet check the next button.click  "input/guess"

      if (playerClickedPattern.length === gamePattern.length){   
          
       // continue to next game sequence if all colors have been verified matching

        setTimeout(function () {                                       
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      gameReset();
    }
}

function nextSequence() {

    playerClickedPattern=[];

    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(buttonColors[randomNumber]);
    console.log(gamePattern);


    $("#level-title").html("Level " + level); //increment game level
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
  
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

function gameReset() {
    level = 0;
    gamePattern = [];
    started = false;
}




