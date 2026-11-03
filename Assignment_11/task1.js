let level = 'outer';
{
  let level = 'inner';
  console.log(level);
}
console.log(level);