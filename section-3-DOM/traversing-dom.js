// child and parent nodes

let val;
// querySelector - first item
const list = document.querySelector('ul.collection'); // ul list
const listItem = document.querySelector('li.collection-item:first-child'); // first list element

// get child nodes
val = list.childNodes; // give both li and text nodes - text nodes are breaks, comments etc, so all pieces of html
val = list.childNodes;  
val = list.childNodes[0];
val = list.childNodes[1].nodeType;
// TYPE :
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 4 - Comment
// 5 - Document itself
// 6 - Doctype

// get children elements only - gives a COLLECTION of li's 
val = list.children; // only li

// children of children
val = list.children[3].children; // the delete link

// we can ADD id to that link
list.children[3].children[0].id = 'test';
val = list.children[3].children[0];
const test = document.getElementById('test');

console.log(test);
test.style.color = "red";

// first and last
val = list.firstChild; // text node
val = list.firstElementChild; // li

val = list.childElementCount;
console.log(val); // 5 li's

// same methods for parents - start with child and request parent properties
val = listItem.parentNode; // ul
val = listItem.parentElement; // same
val = listItem.parentElement.parentElement; // div containing the ul

// get next sibling or previous
val = listItem.nextSibling; //text node
val = listItem.nextElementSibling.nextElementSibling; // next li
val.id = 'next test';
val.style.background = "red";

// get previous sibling or previous
val = listItem.previousSibling; 
val = listItem.previousElementSibling.previousElementSibling; // previous li

console.log(val);

