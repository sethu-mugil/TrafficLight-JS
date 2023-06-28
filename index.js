let stopLightbutton = document.getElementById("stopLight");
let readyLightbutton = document.getElementById("readyLight");
let goLightbutton = document.getElementById("goLight");
let stopBulbbutton = document.getElementById("stopButton");
let readyBulbbutton = document.getElementById("readyButton");
let goBulbbutton = document.getElementById("goButton");

function startRed() {
    stopLightbutton.style.backgroundColor = "#cf1124";
    stopBulbbutton.style.backgroundColor = "#cf1124";
    readyLightbutton.style.backgroundColor = "#4b5069";
    readyBulbbutton.style.backgroundColor = "#1f1d41";
    goLightbutton.style.backgroundColor = "#4b5069";
    goBulbbutton.style.backgroundColor = "#1f1d41";
}

function startyellow() {
    readyLightbutton.style.backgroundColor = "#f7c948";
    readyBulbbutton.style.backgroundColor = "#f7c948";
    goLightbutton.style.backgroundColor = "#4b5069";
    goBulbbutton.style.backgroundColor = "#1f1d41";
    stopLightbutton.style.backgroundColor = "#4b5069";
    stopBulbbutton.style.backgroundColor = "#1f1d41";
}

function startgreen() {
    goLightbutton.style.backgroundColor = "#199473";
    goBulbbutton.style.backgroundColor = "#199473";
    readyLightbutton.style.backgroundColor = "#4b5069";
    readyBulbbutton.style.backgroundColor = "#1f1d41";
    stopLightbutton.style.backgroundColor = "#4b5069";
    stopBulbbutton.style.backgroundColor = "#1f1d41";
}