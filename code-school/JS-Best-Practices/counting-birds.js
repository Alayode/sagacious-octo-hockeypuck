

//Chris Samuel
/*
How many SyntaxBird objects inhabit the dunes?
Modify the conditional in the loop so that it
will progress through the duneInhabitants
array and properly increment the count variable.
*/


//create a constructor and name it Bird
function Bird(){}

//create a constructor function name it DatatypeBird(){}
function DatatypeBird(){}

//create a constructor function name it SyntaxBird
function SyntaxBird(){}


DatatypeBird.protoype = Object.create(Bird.protoype);
SyntaxBird.prototype = Object.create(Bird.prototype);


var TryCatchTaster = function() {},
    SwitchSnagger  = function() {},
    TernaryTracker = function() {};

var NumberNommer = function() {};
    NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var aTryCatchTaster = new TryCatchTaster();
var aSwitchSnagger  = new SwitchSnagger();
var aTernaryTracker = new TernaryTracker();
var aNumberNommer   = new NumberNommer();

var duneInhabitants = [aNumberNommer, aTryCatchTaster,
                       aSwitchSnagger, aTernaryTracker];

var count = 0;
for(var i = 0; i < duneInhabitants.length; i++) {
  if (duneInhabitants[i] instanceof SyntaxBird) {
    count++;
  }
}
console.log(count)
