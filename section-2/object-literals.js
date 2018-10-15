// Objects:

const person = {
  firstName: 'Steve', // string
  age: 30,
  email: 'steve@foo.com',
  hobbies: ['music', 'sport'], // array
  address: {   // object
    city: ['Miami', 'Orlando'],
    state: 'FL'
  },
  getBirthYear: function(){ // function
    return 2018 - this.age; // !!! to acces age from this object!!!
  } // no comma after last object value
}

let val;
val = person;
val = person.firstName;
val = person.hobbies[0];
val = person.address.city[1];

person.age = 35; // changed age, calculate different date
val = person.getBirthYear();
val = person; // age 35
console.log(val);

// Array of objects

const people = [
  {name: 'John', age: 30},
  {name: 'Sara', age: 35}
];

// get value for name in position 0 of the array
console.log(people[0].name);

// to access all people in array we need function to loop over the array

for (let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
