var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];




function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenNumber = buttonColours[randomNumber];
    gamePattern.push(randomChoosenNumber);
    $("#" + randomChoosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/' + randomChoosenNumber + '.mp3');
    audio.play();
    $(".btn").click(function() {
        var userChosenColour = $(this).attr("id");
        // Add further code to handle the user's chosen colour
    });
    userClickedPattern.push(userChosenColour);
}

