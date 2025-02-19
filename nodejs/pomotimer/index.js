const notifier = require("node-notifier");
const moment = require("moment");
const argTime = process.argv.slice(2);

const POMODORO_DURATION = Number(argTime[0]) || 25; // Default ke 25 menit jika tidak ada input
const BREAK_DURATION = Number(argTime[1]) || 5; // Default ke 5 menit jika tidak ada input

let isWorking = true;
let remainingTime = 0;

function formattingTime(totalSecond) {
  const duration = moment.duration(totalSecond, "seconds");
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const seconds = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function startTimer(time) {
  remainingTime = time * 60;

  const timer = setInterval(() => {
    remainingTime--;

    const formattedTime = formattingTime(remainingTime);
    console.log(`${isWorking ? `Work` : `Break`} - ${formattedTime}`);

    if (remainingTime === 0) {
      clearInterval(timer);
      notifier.notify({
        title: isWorking ? `Good Work` : `Break Time`,
        message: isWorking ? `Time for a break!` : `Get back to work!`,
        sound: true,
        wait: true,
      });

      isWorking = !isWorking;
      startTimer(isWorking ? POMODORO_DURATION : BREAK_DURATION);
    }
  }, 1000);
}

startTimer(POMODORO_DURATION);
