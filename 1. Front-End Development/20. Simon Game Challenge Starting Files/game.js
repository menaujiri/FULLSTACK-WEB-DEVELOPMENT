
var bottonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

function nextSequence() {
    var randonNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = bottonColours[randonNumber];
    gamePattern.push(randomChosenColour);
}

$
