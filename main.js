let hoursNumbers = document.querySelector('.hours-numbers');
let minutesNumbers = document.querySelector('.minutes-numbers');
let secondsNumbers = document.querySelector('.seconds-numbers');

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', startStopWatch);
stopBtn.addEventListener('click', stopStopWatch);
resetBtn.addEventListener('click', resetStopWatch);

let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

let changeSeconds = null;

function startStopWatch() {
    changeSeconds = setInterval(() => {
        secondsCounter++;
        secondsNumbers.innerHTML = secondsCounter; 
        if(secondsCounter === 60) {
            secondsCounter = 0;
            secondsNumbers.innerHTML = secondsCounter; 
            changeMinutes();
        }
    }, 1000);
}

function stopStopWatch() {
    clearInterval(changeSeconds);
}

function resetStopWatch() {
    secondsCounter = 0;
    minutesCounter = 0;
    hoursCounter = 0;
    secondsNumbers.innerHTML = secondsCounter; 
    minutesNumbers.innerHTML = minutesCounter; 
    hoursNumbers.innerHTML = hoursCounter; 
    clearInterval(changeSeconds);
}

function changeMinutes() {
    minutesCounter++;
    minutesNumbers.innerHTML = minutesCounter;
    if(minutesCounter === 60) {
        minutesCounter = 0;
        minutesNumbers.innerHTML = secondsCounter; 
        changeHours();
    }
}

function changeHours() {
    hoursCounter++;
    hoursNumbers.innerHTML = hoursCounter;
    if(hoursCounter === 24) {
        
        stopStopWatch();
    }
}
