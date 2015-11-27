var seeds = '';
function Bird(seeds){

  console.log(seeds);
} //[Function: Bird]
function DatatypeBird(){} //[Function: DatatypeBird]
function SyntaxBird(){} //[Function: SyntaxBird]
// console.log(DatatypeBird.prototype);
DatatypeBird.prototype = Object.create(Bird.prototype); //{}
// console.log("assign a new object to DatatypeBird ",DatatypeBird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype); //{}


// console.log(TryCatchTaster, 'TryCatchTaster');
var TryCatchTaster = function(){}, //[Function]
    SwitchSnagger  = function(){}, //[Function]
    TernaryTracker = function(){}; //[Function]


// console.log(TryCatchTaster, 'TryCatchTaster');

TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);//{}
// console.log(TryCatchTaster.prototype,'TryCatchTaster.prototype')

SwitchSnagger.prototype  = Object.create(SyntaxBird.prototype);//{}
TernaryTracker.prototype = Object.create(SyntaxBird.prototype);//{}

var NumberNommer = function(){}, //[Function]
    StringSeeker = function(){}, //[Function]
    BooleanBiter = function(){}; //[Function]

NumberNommer.prototype = Object.create(DatatypeBird.prototype);//{}
StringSeeker.prototype = Object.create(DatatypeBird.prototype);//{}
BooleanBiter.prototype = Object.create(DatatypeBird.prototype);//{}

var duneInhabitants = [NumberNommer, StringSeeker,
  TryCatchTaster, SwitchSnagger, TernaryTracker, BooleanBiter];

var peacock = new Bird;
  console.log(peacock ,'peacock');
