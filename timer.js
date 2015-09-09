var timer;
var timerInterval;
var timerRunning = false;
var tHours;
var minutes;
var seconds;

var timerParagraph = document.getElementById("timerParagraph");
var strong = document.getElementsByClassName("strong");
var timerHours = document.getElementById("timerHours");
var timertMinutes = document.getElementById("timerMinutes");
var timertSeconds = document.getElementById("timerSeconds");
var startStopTimerBtn = document.getElementById("startStopTimer");
var resetTimerBtn = document.getElementById("resetTimer");
var strong = document.getElementsByClassName("strong");
var strongArray = [].slice.call(strong);

calculateTimer();

timerHours.onchange = textChangeHandler;
timerMinutes.onchange = textChangeHandler; 
timerSeconds.onchange = textChangeHandler;

startStopTimer.onclick = timerHandler;

resetTimerBtn.onclick = resetTimer;

function textChangeHandler(event) {
    var inputValue = parseInt(event.target.value);
    if (inputValue > 59) {
        event.target.value = "59";
    }
    else if (inputValue < 10) {
        if (event.target.id == "timerHours") {
            event.target.value = inputValue;
        }
        else {
        event.target.value = "0" + inputValue;
        }
    }  
    calculateTimer();
}

function timerHandler() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        startStopTimerBtn.innerHTML = "Pause Timer";
        timerRunning = true;
        timerHours.style.display = "none";
        timerMinutes.style.display = "none";
        timerSeconds.style.display = "none";
        for (i = 0; i < strongArray.length; i++) {
            strongArray[i].style.display = "none";
        }
    }
    else {
        clearInterval(timerInterval);
        startStopTimerBtn.innerHTML = "Start Timer";
        timerRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    startStopTimerBtn.innerHTML = "Start Timer";
    timerRunning = false;
    timerHours.style.display = "initial";
    timerMinutes.style.display = "initial";
    timerSeconds.style.display = "initial";
    for (i = 0; i < strongArray.length; i++) {
            strongArray[i].style.display = "initial";
    }
    calculateTimer();
}

function calculateTimer() {
    tHours = parseInt(timerHours.value);
    tMinutes = parseInt(timerMinutes.value);
    tSeconds = parseInt(timerSeconds.value);
    timer = (tHours * 3600) + (tMinutes * 60) + tSeconds;
    timerParagraph.innerHTML = "0:00:00"
}

function updateTimer() {
    var seconds = timer;
    var formattedHours = formatHours(seconds);
    seconds = seconds - (formattedHours * 3600);
    var formattedMinutes = formatMinutes(seconds);
    var formattedSeconds = formatSeconds(seconds);
    if (timer <= 0) {
        timerParagraph.innerHTML = "Time's up!";
        resetTimer();
        return;
    }
    timerParagraph.innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
    timer--;
}

function formatHours(seconds) {
    var evenHours = Math.floor(seconds / 3600);
    return evenHours;
}

function formatMinutes(seconds) {
    var evenMinutes = Math.floor(seconds / 60);
    if (evenMinutes < 10) {
        return "0" + evenMinutes;
    }
    else {
        return evenMinutes;
    }
}

function formatSeconds(seconds) {
    var evenSeconds = seconds % 60;
    if (evenSeconds < 10) {
        return "0" + evenSeconds;
    }
    else {
        return evenSeconds;
    }
}