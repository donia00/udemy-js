// addEventListener('click', function(){something to do}

document.querySelector('.clear-tasks').addEventListener('click', function(){
  console.log('Hello'); // click the clear tasks button and hello blinks in the console because it tries redirecting
  // in the html code .clear-tasks button has empty href so no redirection
  // if we put href="#" will stop trying redirecting, hello will stay in the console, we can also add href="google.com", defining href is a default behaviour of the link
});

// e - event object
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello'); 
  e.preventDefault(); // if in html we had href="google.com" as default it will not redirect
});

// instead of unnamed function we can pass onClick
document.querySelector('.clear-tasks').addEventListener('click', onClick);
// define what happens onClick
function onClick(e) {
  console.log('Clicked') // will only blink if not either href defined or:
  e.preventDefault()
}


// e - EVENT OBJECT
function onClick(e) { // e is a mouse event, can be used to prevent default action like e.preventDefault(), we get target: a.clear-task-btn.black etc
 console.log('hello'); 
  let val;
  val = e;
  val = e.target; // IMPORTANT - click happens
  val = e.target.id;
  val = e.target.className;
  val = e.target.ClassList;  // gives a collection
  e.target.innerText = 'foo'; // button text will change to foo
  val = e.timeStamp;
  val = e.clientY; // pixels position
  console.log(val);
}



