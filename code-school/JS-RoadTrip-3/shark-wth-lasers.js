var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];



function makeTargetAssigner(sharks, targets) {
  // insert your code here
  //First, return an anonymous function that takes in a shark parameter.
      return function(shark) {
        // inside the function that is being returned, create a for loop to loop through the sharks array.
        for(i=0; i<sharks.length; ++i){
          // Inside the loop, find out if the current shark from the sharks array matches the shark name that is getting passed as a parameter.
          if(sharks[i] == shark){
            //build an alert message that produces the following output after calling the getTargetFor function:
            alert(targets[i]);
          }else{
            alert("not a target");
          }
        }
      };

};

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");
