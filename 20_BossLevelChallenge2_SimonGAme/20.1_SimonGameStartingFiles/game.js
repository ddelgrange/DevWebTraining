var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

function nextSequence (){
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

});

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass('pressed');
    }, 100);
}