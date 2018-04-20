var count = 0;
var color = '#'; // hexadecimal starting symbol
var letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here

function countCookie() {
    count++;
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("counter").innerHTML = count;
    if (count % 10 == 0) {
        document.getElementById("note").innerHTML = "congrate you just gained 1 lb to your lovely body!!! :)";
        ran_col();
    }
}

var img = document.querySelector("img#clickable");
img.addEventListener("click", clickHandler);

var counter = 0;

function clickHandler() {
    console.log("clickHandler called");
    counter++;
    console.log(counter);
    document.querySelector("p#output").innerHTML = counter;
}

function ran_col() { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('note').style.background = color; // Setting the random color on your div element.
}