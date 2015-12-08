
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
        return secret  * multiplier;
      }
    } // create a function with the name mystery
