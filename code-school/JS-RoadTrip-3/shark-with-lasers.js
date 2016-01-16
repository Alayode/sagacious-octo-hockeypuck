





// Chris Kayode Samuel
// Github: Alayode
// Email : ksamuel.chris@icloud.com

//Description: understanding the caution when using closures with loops


//Now that the danger zones and obstacles are in order and ready to be dealt
// with , the Dev Girls need your assistance with directing the Cold Closures
//Cove sharks to their custom fitted lasers. That's right Lasers.

// Sharks are suppise to be directed to the laser-strapping station that matches the index that their name is in within the sharkList array, which looks like this:

/*
["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."]
*/

//But they've got a problem with their assignLaser function. Something is up, and
// now there's a traffic jam at the last shark's station.

//
// Figure out what happened and apply a fix from this section's video lecture:
//
// 	1. Don't hange the position of the function inside the for loop.
// 	2.Instead of assigning to the stationAssignment variable, return
// 		the anonymous function.
// 	3. Remove the subsequently uneccessary lines with stationAssignment.
//
// Note: You do not need to call the assignLaser function.

var sharkList = ["Jaws","Sharpy","RazorSharp"];

function assignLaser(shark, sharkList) {
  var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      stationAssignment = function() {
        alert("Yo, " + shark + "!\n" )
      };
			return stationAssignment;
    }
  }
}



var f = assignLaser("Sharkie",sharkList);
f();
