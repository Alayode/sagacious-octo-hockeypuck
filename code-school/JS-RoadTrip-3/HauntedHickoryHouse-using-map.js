

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
console.log( "Yo, " + modifiedNames[index] );

}
