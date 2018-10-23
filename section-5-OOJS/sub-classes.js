class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// extend Person class - Customer is a subclass of Person
class Customer extends Person {
  // also needs a constructor, but we extend it 
  constructor(firstName, lastName, phone, membership) {
    // when we instantiate Customer since it extends the Person constructor we want to call function called super
    // super calls the parent class constructor
    super(firstName, lastName);
    // extra customer args
    this.phone = phone;
    this.membership = membership;
  }
  // useful static method so we don't need to instantiate a new customer, just get the cost
  static getMembershipCost() {
    return 500;
  }
}
// instantiate Customer
const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
// greeting from the parent class
console.log(john.greeting());
console.log(john)
// call on Class name Customer, but not Person, works only one way, we can get greetings from Person but not membership cost from customer for person
console.log(Customer.getMembershipCost());