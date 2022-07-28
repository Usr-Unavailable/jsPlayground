


var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
document.querySelector("div .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("div .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var text;

switch (true) {
    case randomNumber1 > randomNumber2:
        text = "❤️Player 1 Wins!";
        break;
    case randomNumber1 === randomNumber2:
        text = "Draw!";
        break;
    case randomNumber1 < randomNumber2:
        text = "Player 2 Wins!❤️"
        break;
}

document.querySelector("h1").textContent = text;


