//EVENT BUBBLING
// task list
document.querySelector('.card-title').addEventListener('click', function(e){
  console.log(e.type); //click
}); // fires up if I click anywhere in the task list not only submit button

// if I add another parents and click and click anywhere on that parent it will fire up both events the above and the below, etc
document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});

// EVENT DELGATION
// cross link
const delItem = document.querySelector('.delete-item'); // only the first cross, so function will act only on the first one
delItem.addEventListener('click', deleteItem);

// we need to act on the parent, lets say body, since we have only one list with crosses
document.body.addEventListener('click', deleteItem);


function deleteItem(e){
  console.log('delete item');
}

// if we call the previous function we fire up anywhere in the body, we need to target the crosses in the body

// IF I CLICK ON THE CROSS I GET THE i tag NOT THE a href, so in the function we need to call the parent to act on the link not the icon

function deleteItem(e){
  // className -> needs all classes for the tag
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  // class list contains
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    // above we are targeting the a tag (cross), now we want to click x and remove the actual parent - li tag task so parent of li
    e.target.parentElement.parentElement.remove();
  }
}