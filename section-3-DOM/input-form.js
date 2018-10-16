// FORMS
//form by def is not redirecting but submitting data 
// use action=' ' in the html tag to redirect

const form = document.querySelector('form'); // if big app with multi forms  - use id or class 
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  //console.log(taskInput.value);
  let cs = taskInput.value;
  console.log(cs);
  taskInput.value = ''; // clear form after submit 
  e.preventDefault(); // prevent default 'walk thr dog' input  
};