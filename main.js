var count = 0;

function countCookie() {
    count++;
    document.getElementById("counter").innerHTML = count;
    if (count % 10 == 0) {
        document.getElementById("note").innerHTML = "congrate you just gained 1 lb to your love body!!! :)";
    }
}

var img = document.querySelector("img#clickable");
img.addEventListener("click", clickHandler);

function clickHandler() {
    console.log("clickHandler called");
}