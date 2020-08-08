var navObj = document.querySelector(".newdiv");
var state = (navObj.style.display = "none");
function onNav() {
    state = navObj.style.display = "grid";
}

function offNav() {
    state = navObj.style.display = "none"; }
const srcOne = "http://198.178.123.8:8404/;";
const srcTwo = "http://live.tnlrn.com:8010/live.mp3";
const srcThree = "http://209.133.216.3:7048/;";
const srcFour = "http://209.133.216.3:7058/;stream.mp3";

var audio = document.querySelector(".staticAudio");

document.getElementById("001btn").addEventListener("click", () => {
    audio.src = srcOne;
    console.log(audio.currentSrc);
});
document.getElementById("002btn").addEventListener("click", () => {
    audio.src = srcTwo;
    console.log(audio.currentSrc);
});
document.getElementById("003btn").addEventListener("click", () => {
    audio.src = srcThree;
    console.log(audio.currentSrc);
});
document.getElementById("004btn").addEventListener("click", () => {
    audio.src = srcFour;
    console.log(audio.currentSrc);
});

function audioPlay() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}
console.dir(audio);

var divEvent = document.getElementsByClassName("nav-btn");
for (var i = 0; i < divEvent.length; i++) {
    divEvent[i].addEventListener("click", () => {
        state = navObj.style.display = "grid";
    });
}

navObj.addEventListener("mouseleave", offNav);



