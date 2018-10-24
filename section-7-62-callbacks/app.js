// mimics our server - array of json objects
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// synchronous way:
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// Async way
function createPost(post, callback) {
  // push post to the array after 2 seconds
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    // loop through
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    // print in  the body 
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts); // getPOSTS is THE CALLBACK FOR createPOST, SO WE GET THE TIMES CORRECT - POST 3 IS NOW INCLUDED IN THE GET POST