// //Chris Samuel
// //Github: Alayode
// //2015-3-12
//
// // Code School: Changing Declarations to Expressions
//
// // Developers for the Forest of Function Expressions
// // Theme Park have created a function declaration named forestFright,
// // but they’ve decided not to keep the function in memory.
// // Convert the function from a named function
// // declaration to an anonymous function
// // expression and assign it to a variable called runAway.
//
//
// function forestFright() {
//   var toAlert = "";
//   for (var i = 0; i < 5; i++) {
//     toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
//   }
//   alert(toAlert);
// }
//
//
// // First lets create a variable called runAway
// var runAway;
//
// //Next lets try remeber that when a function expression is added to a
// //variable we can remove the name of the function from the "()"
// // this will make it become an anonymous function.
//
// function() {
//   var toAlert = "";
//   for (var i = 0; i < 5; i++) {
//     toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
//   }
//   alert(toAlert);
// }
//
//
// // now that it has no name it can called by assiging it to a
// // variable. lets use the variable runAway
//
// //this is another to use this function.
// var runAway = function() {
//   var toAlert = "";
//   for (var i = 0; i < 5; i++) {
//     toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
//   }
//   alert(toAlert);
// };
//
//
// //Finally we will callback the function by adding the name of the variable plus the paraentheses
// //to call back the function.
// //callback
// // runAway();


//Using Function Expressions with Parameters

// The devs at the Death-Defying Dogwoods have determined
// a specific formula for the quantifiable amount of fear
// generated at the theme park. Their formula is based
// on the amount of people, the amount of rain, and
// the amount of sharks. Yes. Sharks.

// If the math is troubling, try to work backwards
// from an ideal number in the accepted range of 100 to 400.
//
// var people = 5;
// var rain = 6;
// var sharks = 6;
//
//
// var fearGenerated = function(numPeeps, rainInInches, numSharks) {
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
//   return totalFear;
// };
//
// Test Your Code!!!!
// Call the function and ensure that your parameters are
// being passed in the right order, and only by variable name.





// Displaying Functions contents
// Periodically, the devs at the Haunted Hickory
// House need to be reminded of their formula.
// They would like to view the contents of the function,
// rather than executing it.
//
// Write one line of code to alert the contents of the
// variable that stores the function to the screen.
// Here is the fearGenerated function expression assignment for reference:

//
// var fearGenerated = function(numPeeps, rainInInches, numSharks) {
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
//   return totalFear;
// };
//
//
// //Note if you are using NodeJS you will not be able to use alert method.
// // That method is a apart of the window object in the browser.
//
// alert(fearGenerated);



// Functions as parameters, arguments and Return Values



// Well, it stands to reason that some people might not want to experience the Haunted Hickory House if the fear is significantly elevated on that day.
//
//     Inside the fearMessage function expression, use conditional statements to check the already-generated fear value, and decide whether it is LOW or MEDIUM.
//     Inside each conditional statement, return a specific confirm message in the following formats:
//
// For fear levels less than 200:
//
// Fear Level: LOW
// Still wanna ride?
//
// For fear levels 200 through and including 300:
//
// Fear Level: MEDIUM
// Think you'll make it?
//
// Lastly, call the confirmRide function and pass in the fearMessage variable. Then assign the results of that function in a new variable called startRide.
//




// Note: You do not need to change the existing code that’s provided for you!!!!
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};


function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);
