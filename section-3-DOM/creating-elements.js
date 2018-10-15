// create an element 
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// add id li.id = 
// attribute

// li.setAttribute('title', 'something'); // name, value
// for example for adding a style
li.setAttribute('style', 'background-color: blue;');


// add text node & append
li.appendChild(document.createTextNode('Hello')); 

// create new link element
const link = document.createElement('a'); // link tag)
// add classes and icon
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>'; // the whole icon element

// append link into li
li.appendChild(link);

// append our li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);