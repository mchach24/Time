var timer;
var timerInterval;
var timerRunning = false;
var minutes;
var seconds;

var timerParagraph = document.getElementById("timerParagraph");
var timerMinutes = document.getElementById("timerMinutes");
var timerSeconds = document.getElementById("timerSeconds");
var startStopTimerBtn = document.getElementById("startStopTimer");
var resetTimerBtn = document.getElementById("resetTimer");

calculateTimer();

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
        event.target.value = "0" + inputValue;
    }  
    calculateTimer();
}

function timerHandler() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        startStopTimerBtn.innerHTML = "Pause Timer";
        timerRunning = true;
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
    calculateTimer();
}

function calculateTimer() {
    minutes = parseInt(timerMinutes.value);
    seconds = parseInt(timerSeconds.value);
    console.log(minutes + ":" + seconds);
    timer = (minutes * 60) + seconds;
    timerParagraph.innerHTML = "00:00"
}

function updateTimer() {
    var formattedMinutes = formatMinutes(timer);
    var formattedSeconds = formatSeconds(timer);
    console.log(timer);
    if (timer <= 0) {
        timerParagraph.innerHTML = "Time's up!";
        resetTimer();
        return;
    }
    timerParagraph.innerHTML = formattedMinutes + ":" + formattedSeconds;
    timer--;
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