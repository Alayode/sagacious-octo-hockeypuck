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

console.log(puzzlers); //returns the function
