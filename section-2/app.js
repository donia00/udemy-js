// log to console
// console.log('hello world');
// console.log([1,2,3]);
// var obj = {a:1, b:2, c:1}
// console.log(obj);
// console.table(obj);

// console.error('ERROR');
// console.clear();

// console.warn("warning");
// var i;
// console.time('hello');
//     for (i = 1; i < 10; i++) {
//         console.log('hello world');
//     }
// console.timeEnd('hello');

// const object - can change data inside but not reassign
// const person = {
//     name: 'Tom',
// }

// add to object and change tom to sar
// person.name = "sarah"
// person.age = 12;

// console.table(person);

// use const when the value is not suppose to be reassign (array, object, data type etc)

// data types - prymitive and referenced
// primitive: string, number, boolean, null, undefined, symbols (ES6)
// referenced - arrays, object literals, functions, dates, anything else that can be stored

// dynamically typed language - types associated with values not variables, the same var can hold multiple tyoes

//PRIMITIVE
const name = 'John Doe';
const car = null; // BUG - null is a primitive type not object
console.log(typeof car);

let test; // undefined
const sym = Symbol(); // symbol
console.log(sym);

// REFERENCED 
// Array is an object type
const hobbies = ['movies', 'music']; // typeof object
console.log(typeof hobbies);
const today = new Date(); // object
console.log(today);
console.log(typeof today);

// can be reassigned - type coersion
let val;
val = 5;
val = String(666);
val = String(new Date());

// toString
val = (555).toString();
val = Number(val);

// parse string to number 
val = parseInt('100.30'); // gives 100
val = parseFloat('100.30');


console.log(val);
console.log(typeof val);
console.log(val.length); // works on strings
console.log(val.toFixed()); //specify decimals - works on numbers 

// type coersion

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; // converted to string 56

console.log(sum);
console.log(typeof sum);





