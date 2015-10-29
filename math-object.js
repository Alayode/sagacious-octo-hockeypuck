






  // The Math object in a function called rollInitiative
  // returns a psuedo-random number between 1-20
          function rollInitiative(){
              var dTwenty = Math.floor(Math.random()*20 +1);
              if(dTwenty == 20){
                console.log('Critical Hit!! You rolled a ' + dTwenty);
              } else {
                console.log("Your roll is " + dTwenty)
                 }

               }

                rollInitiative();
