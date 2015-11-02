//
// Chris Samuel
// ksamuel.chris@me.com
//
// Github: github.com/alayode
//
//
// filename: single-value-function.js
//  Description : Some functions return information to the code that called them.
//  For Example when they perform a calculation, they return the result.

    function calculation(width, height){
      // declare a variable called area and store two more variables
      // that will store the product of width and height;
        var area = width * height ;
        //the return keyword is used to return
        // a value to the code that called the function.
    return area;

}
  // This variable holds the value 15 which was calculated by the
  // the calculation function.
  var wallOne = calculation(3,5);
  // while this variable will hold the value 40 which was also calculated
  // by the same calculation fucnction
  var walltwo = calculation(8,5);

  console.log(wallOne,walltwo);


      // This Demonstrates how the same function can be used to perform the same
      // steps with different values.....
