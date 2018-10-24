// mimics our server - array of json objects
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// Async way
function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
    }, 2000);
  });
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

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)