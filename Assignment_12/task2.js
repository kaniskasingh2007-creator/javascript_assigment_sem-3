function formatMarks(marks, callback) {
  return callback(marks);
}
console.log(formatMarks(76, marks => 'Marks: ' + marks + '/100'));