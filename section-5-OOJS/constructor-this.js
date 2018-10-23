// Person constructor - start with a capital
function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  // a method - function in an object
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
// instatiate
const brad = new Person('Brad', 36);
const john = new Person('John', 30);

// console.log(john.age);

// call the method
const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
