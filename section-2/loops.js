// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // will go to the next iteration without looping throug 3 - 9 or to the next if
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break; // exit at 4
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

let i = 0;

while(i < 10){
  console.log(`Number ${i}`);
  i++;
}

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

//forEACH takes takes a callback function (a self calling function - anonymous - can take 3 parameters - an iterator (car), index, an the actual array, but can take either, just the first one can be named whatever, then index and array )
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP takes a callback function
// The map() method calls the provided function once for each element in an array, in order.
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  //return (user.id && user.name);
  return (`${user.id} for ${user.name}`);
});

console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  // looping through the object and printing key:value
  console.log(`${x} : ${user[x]}`);
}

// accessing objects
const foo= [
  {
    firstName: 'John', 
    lastName: 'Doe',
    age: 40
  },
  {
    firstName: 'Sara', 
    lastName: 'Doe',
    age: {
      age1: 20,
      age2: [{a: 23,
      b: [43, 23, 45]}, 24, 45]
    } 
  }
]

let x = foo[1].age.age2[0].b[1]; // 23 
console.log(x);