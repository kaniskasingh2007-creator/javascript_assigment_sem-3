const timerId = setTimeout(() => console.log('Not shown'), 1000);
clearTimeout(timerId);
console.log('Cancelled');