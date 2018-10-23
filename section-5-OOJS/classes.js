// class - more convenient - remember this workd
class Person {
  // constructor takes properties
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  // add a method without the need of .prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  // don't need to instantiate the object to const mary - to use it call class name
  // console.log(Person.addNumbers(1,2));
  static addNumbers(x, y) {
    return x + y;
  }
}
// create/instantiate an object
const mary = new Person('Mary', 'Williams', '11-13-1980');
// change object
mary.getsMarried('Thompson');
console.log(mary);
console.log(mary.greeting());