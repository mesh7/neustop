// let [miliiSeconds, seconds, minutes, hours] = [0,0,0,0];
// let timerReference = document.querySelector('#neu-watch');
let seconds = 0;
let minutes = 0;
let hours = 0;
let watchStopStatus = true;

//Define variables to hold the
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Stopwatch function which needs to be called in interval of seconds
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
  //Display the updated value of the timer
  document.getElementById("neu-watch").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

window.setInterval(stopWatch, 1000);

function startStop() {
  if (watchStopStatus === true) {
  }
}
