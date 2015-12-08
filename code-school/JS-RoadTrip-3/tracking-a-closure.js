
//Chris Samuel
//ksamuel.chris@icloud.com


//Tracing a Closure 1

// Examine the code below(i.e., manually trace it), in your head determine the final
// value of the result variable, and alert the value as a numer using one line of code.

    // You must give only 1 number literal as the argument to alert.
    // Do not do any calculations. So, for example, don't use *. (Definitely do some math
    // in your head though!)
    // Don't pass in a string.
    // The number must be a whole number. No Decimal points.

    function mystery(){

      var secret = 6; // assign it a value of 6

      function mystery2(multiplier){
        return secret  * multiplier; // return the product of secret and multplier
      }// create a new function in the mystery function named mystery2 pass it a variable named multplier

      return mystery2; // outside the mystery2 function return the value of the function in mystery();

    } // create a function with the name mystery

         mystery();//callback the function.

    console.log(mystery); // returns the entire function
    var hidden = mystery(); // calling back hidden will return the value of mystery
    var result = hidden(3)  // ???
