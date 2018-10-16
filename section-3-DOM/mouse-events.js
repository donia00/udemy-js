// MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// function runEvent defined at the bottom
// Click
clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);

// Mouse down up enter leave over out
clearBtn.addEventListener('mousedown', runEvent);
// dif between enter and leave - main element (card) over and out element inside (clear tasks button)
card.addEventListener('mouseover', runEvent);

// mouse move
card.addEventListener('mousemove', runEvent);


// Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX}`;
};