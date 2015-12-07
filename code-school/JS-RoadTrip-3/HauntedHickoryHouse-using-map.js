

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
