class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return 'Hi, I am ' + this.name;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
const anita = new Teacher('Anita', 'Maths');
console.log(anita.greet());