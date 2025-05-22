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