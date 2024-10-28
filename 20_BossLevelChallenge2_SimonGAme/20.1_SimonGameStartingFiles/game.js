var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameIsStarted = false;

var level = 0;

function nextSequence (){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeTo(100, 0.1).fadeTo(200, 1.0);
    playSound(randomChosenColour);
}

function playSound (pdetect){
    switch (pdetect) {
        case "green":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();  
          break;
        case "blue":
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();  
          break;
        case "red":
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();
          break;
        case "yellow":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
          break;
        case "wrong":
            var wrongSound = new Audio('sounds/wrong.mp3');
            wrongSound.play();
          break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

$(".btn").on('click', function(){
    var userChosenColour = $(this).attr("id"); 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass('pressed');
    }, 100);
}

$(document).keypress(function() {
  if (!gameIsStarted) {
    gameIsStarted = true;
    $("h1").text("Level "+level);
    nextSequence();
  }
});

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    //console.log("success");
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }else{
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    //console.log("wrong");
  }
}

function startOver(){
  level = 0;
  gamePattern=[];
  gameIsStarted = false;

}