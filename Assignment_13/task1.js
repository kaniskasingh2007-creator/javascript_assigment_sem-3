const prices = [120, 45, 300];
const total = prices.reduce((acc, current) => acc + current, 0);
console.log(total);