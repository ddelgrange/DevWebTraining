function playSound (pdetect){
    switch (pdetect) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
          break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();  
          break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
          break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
          break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
          break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
          break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
          break;
        
        default:
            console.log(this.innerHTML);
            break;
    }
}


for(var btn = 0; btn < document.querySelectorAll(".drum").length; btn ++){
    document.querySelectorAll("button")[btn].addEventListener("click", function (){
        playSound(this.innerHTML);
        buttonANimation(this.innerHTML);
    });
};

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonANimation(event.key);
})


function buttonANimation (currentKey){
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
};