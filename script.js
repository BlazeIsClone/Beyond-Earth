var navObj = document.querySelector(".newdiv");
var state = navObj.style.display = "none";
function onNav() {
    state = navObj.style.display = "grid";
}

function offNav() {

    state = navObj.style.display = "none";

}
