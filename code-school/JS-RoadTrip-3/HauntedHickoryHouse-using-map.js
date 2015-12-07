

//Using Map With Arrays

// Over at Maple Mountain, the dev team has recieved some name data
// from the customer terminal that they want to sue to customize greetings for each of their passengers.
// But the data consists of an array with many where the first and last names of each passenger are split up


// They want to take the passengers array and convert those subarrays into strings that contain
// the first and last name for each passenger.

// 1. Create a modifiedNames variable. This will allow us to pass in a functino to be
// on every element in the array.

var passengers = [ ["Thomas", "Meeks"], ["Gregg", "Pollack"], ["Christine", "Wong"], ["Dan","McGraw"]  ];

// Assign passenger.map() to the modifiedNames Variable, This will allow us to pass in a function to be userId
// on every eleement in the array.

var modifiedNames = passengers.map(function(arrayCell){
  return arrayCell[0] + " " + arrayCell[1];
});

console.log(passengers,"normal array");
console.log(modifiedNames,"Using the map function: ");

/*
So with arrayCell being passed into the passengers object map function we
should be able to create a new array of object merging the objects into a single object.


*/



//Using Map with arrays II


/*
The passengers have arrived at Maple Mountain! Take the modifiedNames array that
you produced in the last challenge, and map a new anonymous function on it

*/



var passengers = [ ["Thomas", "Meeks"], ["Gregg", "Pollack"], ["Christine", "Wong"], ["Dan","McGraw"]  ];

// Assign passenger.map() to the modifiedNames Variable, This will allow us to pass in a function to be userId
// on every eleement in the array.

var modifiedNames = passengers.map(function(arrayCell){
  return arrayCell[0] + " " + arrayCell[1];
});

console.log(passengers,"normal array");
console.log(modifiedNames,"Using the map function: ");


// say yo to each person with a for loop
for(index = 0; index < modifiedNames.length; ++index){
console.log( "Yo, " + modifiedNames[index] , 'forLooped' );

}

var greetings = modifiedNames.map(function(greetCell){
  return greetCell +  ' : used map';
  // return console.log(greetCell +  ' : used map + console');
  // alert(greetCell +  ' : used map')


});
//
// The folks over at poplar puzzlers need an array of functions for one of theirs puzzles.
// THey've requested your help in making the array, which would like to be called puzzlers.
//The cells of the array shoul deach contain a function , and these functions-well, what they
//return are listed here in order. Each functoin has one parameter. Note input below represents
//the parameter, and you will need to convert the math formulas to JavaScript:

// 1. Returns 3 * input - 8
// 2. Returns (input + 2) * (input + 2) * (input + 2);
// 3. Returns input * input - 9
// 4. Returns input % 4


// Use your knowledge of arrays and anonymous functions expressions to build this
// array of functions.

// Note: Use parentheses with your return statement if your having trouble
// with the order of operations.

// create an empty array and assign it to a variable called puzzlers
var puzzlers = [];

//create a function that will take a variable named input
// function(input){};

//Next move the function into the array
var puzzlers = [
  function(input){return input}


];
