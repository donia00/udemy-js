// ********************************************//
// DOM SELECTORS - single and multiple element //

 // document.getElementById()

 console.log(document.getElementById('task-title'));
 // get from it 
 console.log(document.getElementById('task-title').id);

 // save as const

 const taskTitle = document.getElementById('task-title');
// styling 
console.log(document.getElementById('task-title').style.background = 'black');
// dissapear 
console.log(document.getElementById('task-title').style.display = 'none');

// ******************************************//
 // change content

 console.log(taskTitle.innerText = 'FOO');
 console.log(taskTitle.textContent = 'red');
 console.log(taskTitle.innerHTML = '<span style="color:red">TASK</span>'); // insert HTML code 
 taskTitle.textContent = 'FOO';


// BETTER WAY //
// ******************************************//
 // document.querySelector() -> any css or html selector - single element not all li or h2 etc

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title')); // only the first one!!!
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; //first li
document.querySelector('ul').style.color = 'blue' // did not overwrite the li above, li is child?

 // css pseudo classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:last-child').textContent = 'FOO';
document.querySelector('li:nth-child(odd)').style.background = 'red'; // changes only FIRST odd - query sel is a single item selector


// ******************************************//
// MULTIPLE SELECTOR
 // document.getElementsByClassName - multiple items - HTML collection like an array
let items = document.getElementsByClassName('collection-item');

console.log(typeof items);
console.log(items[0]);
items[0].style.color = 'yellow';

 // not global scope - local scope of the first ul selected with query selector
 // querySelector - first item
const listItems = document.querySelector('ul').getElementsByClassName('collection-items');

console.log(listItems);

 //tag name - all lis
let lis = document.getElementsByTagName('li');

console.log(typeof lis);
console.log(lis[0]);
lis[0].style.color = 'green';

// lis.reverse(); // error, lis is a collection not array
 // convert to array
lis = Array.from(lis);
console.log(lis);

for (let i = 1; i <= lis.length; i++) {
  console.log(lis[i-1]);
};

lis.forEach(function(li, index) {
  console.log(li.className);
  lis[0].style.color = 'black';
  li.textContent = `${index}: hello`;
});

// HTML COLLECTION - all nodes - ARRAY already
// document.querySelectorAll - node list - an array
items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items[0]);

//////////////////////////////////////////
function foo (item, index) {
  items[index].textContent = 'foo'; 
  // or using argument item:
  item.textContent = `${index}: Foo vfjas`; // NUMBERED LIST
}
items.forEach(foo);

let val = 3;
// or pass as a callback function
items.forEach(function (item, index) { // item and index are args for forEach
  items[index].textContent = 'foo'; 
  // or using argument item:
  item.textContent = `${index}: foo` + val; // NUMBERED LIST & val declared in globl scope can be accessed - callback functions are closures

});
/////////////////////////////////////////

const liOdd = document.querySelectorAll('li:nth-child(odd)'); // css class
const liEven = document.querySelectorAll('li:nth-child(even)');
console.log(typeof liOdd);
liOdd.forEach(function(item, index){
  liOdd[index].style.background = 'red';
  // or
  item.style.background = 'grey';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'black';
}


