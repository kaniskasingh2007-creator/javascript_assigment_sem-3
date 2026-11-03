const invalidText = '{name: Rohan}';
try {
  JSON.parse(invalidText);
} catch (error) {
  console.log('Invalid JSON');
}