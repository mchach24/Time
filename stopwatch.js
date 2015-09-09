var counter = 0;
var stopwatchInterval;
var stopwatchRunning = false;

var counterParagraph = document.getElementById("counterParagraph");
var startStopWatchBtn = document.getElementById("startStopWatch");
var resetStopwatchBtn = document.getElementById("resetStopwatch");

startStopWatchBtn.onclick = stopwatchHandler;

resetStopwatchBtn.onclick = resetStopwatch;


function stopwatchHandler() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 100);
        startStopWatchBtn.innerHTML = "Pause Stopwatch";
        stopwatchRunning = true;
    }
    else {
        clearInterval(stopwatchInterval);
        startStopWatchBtn.innerHTML = "Start Stopwatch";
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval); 
    counter = 0; 
    counterParagraph.innerHTML = "0:00:00.0"; 
    startStopWatchBtn.innerHTML = "Start Stopwatch";
    stopwatchRunning = false;
}

function updateStopwatch() {
    counter++;
    var formattedCounter = formatCounter(counter);
    counterParagraph.innerHTML = formattedCounter;
}

function formatCounter(tenthsOfSecond) {
    var evenHours = Math.floor(tenthsOfSecond / (3600 * 10)); //3600 is seconds per hour; 10 is tenthsOfSecond per second
    tenthsOfSecond = tenthsOfSecond - (evenHours * (3600 * 10));
    var evenMinutes = Math.floor(tenthsOfSecond / (60 * 10)); //60 is seconds per minute; 10 ^
    tenthsOfSecond = tenthsOfSecond - (evenMinutes * (60 * 10));
    var evenSeconds = Math.floor(tenthsOfSecond / 10);
    tenthsOfSecond = tenthsOfSecond % 10;
    if (evenMinutes < 10) {
        evenMinutes = "0" + evenMinutes;
    }
    if (evenSeconds < 10) {
        evenSeconds = "0" + evenSeconds;
    }
    return evenHours + ":" + evenMinutes + ":" + evenSeconds + "." + tenthsOfSecond;
}