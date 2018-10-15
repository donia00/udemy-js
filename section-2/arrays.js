
// arays const
// constructor
// const numbers2 = new Array(1,2,3);
const fruit = ['apple', 'bannana', 'pear'];
const mixed = [22, true, null, {a:1, b:1}, new Date()];
 //console.log(mixed[3]);
const numbers = [32,43,44,77,100];


let val;
val = numbers.length;
//val = Array.isArray(numbers);

// insert
numbers[2] = 100;
// find index valye
// val = numbers.indexOf(100);
// numbers.push(250) //end
// numbers.unshift(33) // front
// numbers.pop(); // remove last
// numbers.shift; // remove first
//numbers.splice(1,3);

//concatenate arrays arr + arr2

// sorting arrays
val = fruit.sort(); //alphabetical order
val = numbers.sort(); // based on first integer on the number

// to sort numbers - use compare function!

// val = numbers.sort(function(x,y){
//   return x - y;
// });

// val = numbers.sort(function(x,y){
//   return y - x;
// });
 
// find
function under50(num){
  return num < 50;
}

val = numbers.find(under50); // first number in the array under 50 -> 32 

// return max 
// function max (arr){
//   return Math.max(1,2,3); // of an array like that, can't pass numbers
// } 
// val = max(numbers);

console.log(val);
console.log(numbers);
console.log(fruit);