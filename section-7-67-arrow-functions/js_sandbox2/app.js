// // const sayHello = function() {
// //   console.log('Hello');
// // }

// // get rid of 'function' and add arrow after the arguments parentheses

// const sayHello = () => {
//   console.log('Hello');
// }

// // One line function does not need braces
// const sayHello = () => console.log('Hello');


// // return
// const sayHello = function() {
//   return 'Hello';
// }

// // One line returns
// const sayHello = () => 'Hello';

// console.log(sayHello());



// // Return object
// const sayHello = () => ({ msg: 'Hello' });

// // parameters
// // Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// // Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

// arrow func as callbacks
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function(name) {
   return name.length;
 });

 const nameLengths = users.map(name => name.length)


// Shorter
const nameLengths = users.map((name) => {
  return name.length;
});

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);