

//Speed Avergaing
//Retrieveing and using nuymerical Time Data.

var rightNow = new Date();
var  endTime  =  new Date();
var timeElapsed = endTime - rightNow ;

function SpeedTest(testImplement.testParams,repetitions){
  this.testImplement = testImplement; // testImplement going into the testImplement property
  this.testParams = testParams; //testParams is going into the testParams property
  this.repetitions = repetitions || 10000; // repetitions is going into the repetitions property
  // A little more about repetitions parameter
  //we will make it optional by defaulting to 10000 repetitions
  // using our logical assignment best practice.
  //We'll look at this optional nature in a bit

  this.average = average; //average is going into the average property
}


SpeedTest.prototype = {
  startTest: function(){
    //using commas instead of multiple vars
    var beginTime, endTime,sumTimes = 0;
    for(var i = 0, x = this.repetitions; i < x; ++i){
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                        this.repetitions + ": " +
                        this.average);
  }
}


// Lets build some code that lacks some best practices and test its Speed

  var firstRegimenNewb = ["Grimble Horsehead" , "Thalis Greatlight",
                            "Bunder Ropefist" , "Ernst Breadbaker"];
      //Hypothetically we would have tons of Knight objects in our firstRegimenKnights array
  var firstRegimenKnights = [];

for(var i = 0; i < firstRegimenNewbs.length; i++)}{
    var newGuy = new Knight(firstRegimenNewbs[i],1);
    firstRegimentKnights.push(newGuy);
    }
