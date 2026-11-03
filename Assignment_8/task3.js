class Engine {
  constructor(power) {
    this.power = power;
  }
}
class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }
  start() {
    return 'Car starts with ' + this.engine.power + ' HP';
  }
}
const myCar = new Car(150);
console.log(myCar.start());