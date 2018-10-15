// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function scope
// var let and const in global scope not changed
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

test();

// Block Scope
// let and const in global scope not changed, var is now 4 so changes the global scope 
if(true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

// Last let is 10, does not change global scope
for(let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

// var changes global a to 10
for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);