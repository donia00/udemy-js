const name = 'John';
const age = "31";
const job = 'Web dev';
const city = 'Miami';
let html;

// without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>City: ' + city + '</li></ul>';

// or
html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '</ul>';


function hello(){
  return 'hello';
}

// template strings (literals) - backticks!
// can put expressions, functions and conditionals 
// : represents else
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${name}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li> 
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`

// insert let html variable into the index.html document body
document.body.innerHTML = html;

