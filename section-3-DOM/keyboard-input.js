const form = document.querySelector('form'); // form html tag
const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// Clear input from walk the dog to New Task
taskInput.value = ''; // often after submit form
// run function on submit
form.addEventListener('submit', runEvent);

// Tasks we can run on input
// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener('change', runEvent);

function runEvent(e){
 console.log(`EVENT TYPE: ${e.type}`); // submit
 console.log(taskInput.value); // input value
 // console.log(e.target.value);

//  heading.innerText = e.target.value;

// Get input value
  //console.log(taskInput.value);// walk the dog is a default 

 e.preventDefault(); // i.e if action="foo.php"
}

