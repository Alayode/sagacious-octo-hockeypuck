
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
