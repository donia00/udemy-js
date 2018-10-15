 // dom is object oriented - every node has its own methods
let val;
 // html collections
 val = document;
 val = document.all; // 
 val = document.all[0]; // html
 val = document.all.length;
 val = document.head; // etc
 val = document.forms[0];
 val = document.forms[0].id;
 val = document.forms[0].action;
 val = document.links;
 val = document.links[0].className;
 val = document.links[0].classList[1];
 val = document.images;
 val = document.scripts;
 val = document.scripts[2].getAttribute('src');
 // dom selectors for single elements - if we grab a class object it will give only the first one on the list not the whole collection

// convert to array;
let scripts = document.scripts;
let scriptsArr = Array.from(scripts); // array methods accessible
scripts.forEach(function(script){
  console.log(script);
})

