var clockInterval;
var clockIntervalRunning = false;

var dateParagraph = document.getElementById("date");
var timeParagraph = document.getElementById("time");
var startStopClock = document.getElementById("startStopClock");

startStopClock.onclick = startStopClockHandler;

function startStopClockHandler() {
    if (!clockIntervalRunning) {
        clockInterval = setInterval(updateClock, 100);
        startStopClock.innerHTML = "Stop Clock";
        clockIntervalRunning = true;
    }
    else {
        clearInterval(clockInterval);
        startStopClock.innerHTML = "Start Clock";
        clockIntervalRunning = false;
    }
}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var hours = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"]

function updateClock() {
    var d = new Date();
    var day = days[d.getDay()]
    var month = months[d.getMonth()];
    var date = d.getDate()
    var dateSuffix = getDateSuffix(date);
    var year = d.getFullYear().toString();
    
    var todayDate = day + ", " + month + " " + date + dateSuffix + ", " + year;
    dateParagraph.innerHTML = "Today is " + todayDate;
    
    var hour = hours[d.getHours()];
    var minutes = getTwoDigit(d.getMinutes());
    var seconds = getTwoDigit(d.getSeconds());
    var tenthsOfSecond = getTenthsOfSecond(d.getMilliseconds());
    var period = getPeriod(d.getHours());
    
    var currentTime = hour + ":" + minutes + ":" + seconds + "." + tenthsOfSecond + " " + period;
    timeParagraph.innerHTML = "It is currently " + currentTime;
}

function getDateSuffix(date) {
    if (date === "1" || date === "21" || date === "31") {
        return "st";
    }
    else if (date === "2" || date === "22") {
        return "nd";
    }
    else if (date === "3" || date === "23") {
        return "rd";
    }
    else {
        return "th";
    }    
}

function getMinute(minutes) {
    if (minutes < 10) {
        return "0" + minutes;
    }
    else {
        return minutes.toString();
    }
}

function getSecond(seconds) {
    if (seconds < 10) {
        return "0" + seconds;
    }
    else {
        return seconds.toString();
    }
}

//function that returns 09 if time === 9, and 33 if time === 33
//time is either minute or second
function getTwoDigit(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time.toString();
    }
}

function getTenthsOfSecond(milliseconds) {
    if (milliseconds === 0) {
        return "0";
    }
    else {
        var tenth = Math.floor(milliseconds / 100);
        return tenth.toString();
    }
}

function getPeriod(hour) {
    if (hour < 12) {
        return "am";
    }
    else {
        return "pm";
    }
}