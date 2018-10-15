// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
//
  // ES5 default value declaration rather than as above
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
//
  return 'Hello ' + firstName + ' ' + lastName;
} // so ; after function declaration

// console.log(greet());


// FUNCTION EXPRESIONS
const square = function(x = 3){ // 3 is default
  return x*x;
}; // ; because it's a const

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// declare and run in the same time
(function(){
  console.log('IIFE Ran..');
})(); // () in the end 

(function(name){
  console.log(`Hello ${name}`);
})('Brad'); // Brad passes as name 

// PROPERTY METHODS
// function in an object is called a method

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// add to the object the deleate method
todo.delete = function(){
  console.log('Delete todo...');
}
// each name in the object is a name of method (function) that can be invoked:
todo.add();
todo.edit(22);
todo.delete(); // it's part of the object 
console.log(todo)

