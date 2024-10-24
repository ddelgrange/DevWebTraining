/*$("h1").addClass("big-title");

$("h1").click(function(){
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    console.log(event.key);
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
})*/

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})