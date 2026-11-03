class Locker {
  constructor(pin) {
    this.pin = pin;
  }
  checkPin(testPin) {
    return testPin === this.pin;
  }
}
const myLocker = new Locker(1234);
console.log(myLocker.checkPin(1111));
console.log(myLocker.checkPin(1234));