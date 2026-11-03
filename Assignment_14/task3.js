let count = 1;
const intervalId = setInterval(() => {
  console.log('Tick ' + count);
  if (count === 3) {
    clearInterval(intervalId);
  }
  count++;
}, 200);