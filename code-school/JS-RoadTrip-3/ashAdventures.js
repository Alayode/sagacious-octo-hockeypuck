

//Choose Their Own Adventure

// Ash Adventures has three different  "Adventures"
// to choose from, and customers are prompted for a number at a terminal
// The number is stored as userChoice and then passed into a Function
// called adventureSelector.

// Inside the function, you need to return an anonymous function based on the
// number that the user selected. Each of your three anonymous functions should
// contain a boarding alert message :

//selection 1:
// You selected the Vines of Doom!


//Selection 2
//Looks like you want the Lake of Despair!


//Selection 3
//The caves of Catastrophe!



/*
Assume the user's choice has already been stored as 1,2, or 3, and is passed in as the userChoice
parameter. Make sure that you return all message functions as anonymous functions,
instead of stored in variables. You do not need to call the function at the end

*/


var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

console.log(puzzlers[0](1));
// console.log(puzzlers[puzzlers[0](3)](puzzlers[4](9)));
// console.log(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
