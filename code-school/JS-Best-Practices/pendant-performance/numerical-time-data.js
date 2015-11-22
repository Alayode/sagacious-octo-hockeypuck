

// To accurately generate numberical time data, we can manipulate, we'll first examine
//the JavaScript Date object.


var now = +new Date();
var later = +new Date();
console.log(now); // this new Date iobject immediately captures, the current date and time.
//Tue Nov 17 2015 16:30:12 GMT-0500 (EST)

// Now lets place an unary operator in front of our Date Object variable
// asks for the specific value in milliseconds


//the difference between the two values will be the amount
// of time that passed betweenthe creation of both variable
var elapsedTime = endTime - rightNow;
console.log(elapsedTime)

console.log(now);
// 1447795812900

console.log("We will use our Date object");

function SpeedTest(testImplement,testParams, repetitions){
  /*
  This will be specific code we want to test for performance
  speed. We'll encapsulate it all within its own function later.
  */

  //testImplement
  // This will be the specific code we want to test for performance speed.

  // testParams
  // This represents whatever parameters our test code needs in order to work
  // correctly. Might be an array of values or just a single value.

  // repetitions
  // The higher the repetions ,m the more reliable our average speed is.
    this.testImplement = testImplement;
    this.testParams = testParams;

    //We are making repetitions parameters optional
    this.repetitions = repetitions || 10000;

    this.average = 0;
}
