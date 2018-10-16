// Create element and insert to DOM
const li  = document.createElement('li');
// Add class
li.className = 'collection-item';
// // Add id
li.id = 'new-item';

// // Add attribute
li.setAttribute('title', 'New Item');

// // Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
const link = document.createElement('a');
// // Add classes
link.className = 'delete-item secondary-content';
// // Add icon html not text node
link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// ******************************************//
// excercise: append to the second ul:
let itemsUl = document.getElementsByTagName('ul')
uls = Array.from(itemsUl)
console.log(uls[1])
uls[1].appendChild(li);
// ******************************************//


// Replace element h5 to h2

// create new element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node - text within h2 tag
newHeading.appendChild(document.createTextNode('Task list')); 

// get the old heading
const oldHeading = document.getElementById('task-title');
// get parent (div above h5)
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove
lis[0].remove();
list.removeChild(lis[3]); // removes from first ul only since querySelector('ul')
lis[5].remove(); // will remove second foo from my added ul since querySelectorAll('li')

// // class & attr
const firstLi = document.querySelector('li:first-child'); // since querySelector single li without :first-child is the same
const link2 = firstLi.children[0]; // a tag - delete link 

let val;
val = link2.className; // not array
val = link2.classList; // as array
link2.classList.add('test');
link2.classList.remove('test');

// attributes
link2.getAttribute('href');
link2.setAttribute('href', 'google.com');

// removeAttribute, hasAttribute, set, get 
console.log(link2); 

// excercise
const lastLi = document.querySelectorAll('li');
console.log(lastLi[4])
const last = lastLi[4] // Hello world


