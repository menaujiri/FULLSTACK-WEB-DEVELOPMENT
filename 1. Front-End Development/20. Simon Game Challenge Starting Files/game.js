


var bottonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userClickedPattern = []

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    new audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
    animatePress(userChosenColour);
})

