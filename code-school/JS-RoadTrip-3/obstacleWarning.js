// Chris Samuel
// ksamuel.chris@gmail.com
// Building a Closure I

/*
The Dev Girls at the Cold Closures Cove sometimes
need to provide warnings to travelers about various
obstacles that sometimes float into the Cove. They
need you to prepare a very efficient warning maker
that will allow them to create only the warnings They
need, and only when they need it. Closures to the
resuce!

They've started a function called warningMaker with
a parameter called obstacle. Within this function,
return an anonymous function that displays a specific
alert message based on the specific obstacle encountered.

The format of the message should be as follows:

Beware! There have been <obstacle> sightings in the Cove
today!

Note:  You do not need to call the warningMaker function.

*/


//
//
// function warningMaker(obstacle) {
//   if(obstacle){
//     alert('Beware! There have been ' + obstacle + ' sightings in the Cove today!')
//   }
// }

function buildTicketMaker(transport){
  var passengerNumber = 0
  return function (name){
    ++passengerNumber;
    console.log("Here is your transportation ticket via the " + transport + "\n" +
    "Welcome to the Cold Closures Cove. " + name + "!" +
    "You are now number " + passengerNumber + " in line.");
  }
}

//
//
// function warningMaker(obstacle) {
//   // create a count
//   return function(number, location) {
//     // keep track of warnings
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!\n" +
//           // finish the warning message here
//
//     );
//   };
// }
//


var getTicketWarning = buildTicketMaker('Submarine');


//On our first call to the new getTicketWarning passengerNumber is increased by 1
getTicketWarning("Toad");// +1
getTicketWarning("Bowser"); // +2
getTicketWarning("Mario");  // +3
getTicketWarning("Peach");  // +4
getTicketWarning("Koopa");  // +6
getTicketWarning("Shyguy"); // +7

// Each time a ticket is printed this passengerNumber will contain the
// precise amount of times this kind of tickethas been given.
// Notice that initial value for passengerNumber is evident in our nwa function.
// It's value start at 0 and is adjusted with each call to getSubmarineTicket.
