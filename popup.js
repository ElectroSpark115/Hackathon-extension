console.log('This is a popup!');
//use setTimeout to set a timer for 25 minutes (5seconds for testing)

document.getElementById('startButton').addEventListener('click', function () {
  const aot = 5 * 1000; // amount of time = 5 seconds

  const timeStarted = document.createElement('div');
  timeStarted.innerText = 'Timer started!';
  document.querySelector('body').appendChild(timeStarted);

  setTimeout(() => {
    const now = new Date(); // Thu May 22 2025 13:41:04 GMT-0400 (Eastern Daylight Time)
    const hours = now.getHours(); // 24 hour current time 13
    const minutes = now.getMinutes().toString().padStart(2, '0'); // '05'
    const currentTime = `${hours}:${minutes}`;
    alert(`It's ${currentTime}! Take a 5 minute break`);
  }, aot);
});

/*
document.getElementById('startBtn').addEventListener('click', function () {
    // const duration = 25 * 60 * 1000; // 25 minutes in milliseconds
    const duration = 5 * 1000; // ⏱ 5 seconds for testing

    alert("Pomodoro started! Timer is running...");

    setTimeout(() => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0'); 
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        const timeString = `${hours}:${minutes} ${ampm}`;

    alert(`Time's up! Current time is ${timeString}`);
    }, duration);
});
*/
