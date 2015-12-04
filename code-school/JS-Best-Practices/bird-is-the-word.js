
//declare of function and name is bird
function Bird() {
  Bird.prototype = console.log("Im the bird");
};

//declare a new constructor function call it DataType Bird(){};
function DataTypeBird(){
   DataTypeBird.prototype = console.log("Im the DataTypeBird")
};

// callback the DataTypeBird function
DataTypeBird();

// on the DataTypeBird prototype create a new object and assign it
// to DataTypeBird.prototype.
DataTypeBird.prototype = Object.create(Bird.prototype);


// create an anonymous function that takes no parameters and assign it to  a new variable
// constructor call it NumberNommer
var NumberNommer = function(){};


//On the NumberNommer prototype create a new object and pass it the DataTypeBird.prototype
NumberNommer.prototype = Object.create(DataTypeBird.prototype);

// MyNumberNommer is now a new instance of bird
// this will now only give



console.log(NumberNommer); // Returns a function

// Returns a function with a empty object
console.log(NumberNommer.prototype);
