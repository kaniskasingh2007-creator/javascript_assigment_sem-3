function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
Student.prototype.result = function() {
  return this.marks >= 40 ? 'Pass' : 'Fail';
};
const asha2 = new Student('Asha', 88);
console.log(asha2.result());