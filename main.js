let count = 0;
let color = '#'; // hexadecimal starting symbol
const letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here
let lb = 1;
var previouslocation = "location0";
var currentlocation = "";

function countCookie() {
    count++;
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("counter").innerHTML = count;
    if (count % 10 == 0) {
        document.getElementById("note").innerHTML = "congrats you just gained " + lb + "lb to your Lovely body!!! :)";
        ran_col();
        lb += 1;
    }

    if (count == 20) {
        document.getElementById("clickable").src = "monkey.jpg";
        document.getElementById("note").innerHTML = "you ate too much :)";
    }


    var indexNumber = Math.floor(Math.random() * Math.floor(9));
    var location = "location" + indexNumber;
    currentlocation = location;
    document.getElementById(previouslocation).src = "greenface.jpg";
    document.getElementById(currentlocation).src = "monkeybanana.jpg";
    previouslocation = location;
}

let img = document.querySelector("img#clickable");
img.addEventListener("click", clickHandler);

let counter = 0;

function clickHandler() {
    console.log("clickHandler called");
    counter++;
    console.log(counter);
    document.querySelector("p#output").innerHTML = counter;
    if (counter == 20) {
        document.querySelector("img#clickable").setAttribute("src", "monkey.jpg");
        document.getElementById("note").innerHTML = "you ate too much :)";
    }
}

function ran_col() { //function name
    let color = '#'; // hexadecimal starting symbol
    const letters = ['FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here  
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('note').style.background = color; // Setting the random color on your div element.
}

const trees = ["oak", "elm", "lemon"];
let counter2 = 0;
const maxCount = 3;

function playGuessingGame(guess) {
    counter2 += 1;
    if (trees.indexOf(guess) >= 0) {
        alert("go got it!");
        return;
    }
    if (counter2 < maxCount) {
        playGuessingGame(prompt("guess a tree!"));
    } else {
        alert("sorry, out of gueeses :(");
        return;
    }
}

// playGuessingGame(prompt("guess a tree"));

var playGuessingGame = (guess = "nothing") => {
    counter2 += 1;
    if (trees.indexOf(guess) >= 0) {
        alert("go got it!");
        return;
    }
    if (counter2 < maxCount) {
        playGuessingGame(prompt("guess a tree!"));
    } else {
        alert("sorry, out of gueeses :(");
        return;
    }
}

// playGuessingGame(prompt("guess a tree"));