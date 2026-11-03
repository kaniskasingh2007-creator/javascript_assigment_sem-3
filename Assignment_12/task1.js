function applyTwice(func, value) {
  return func(func(value));
}
function addTen(num) {
  return num + 10;
}
console.log(applyTwice(addTen, 5));