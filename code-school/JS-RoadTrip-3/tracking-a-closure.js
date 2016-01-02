//
//
//
//
//
//
//
//
// //Chris Samuel
// //ksamuel.chris@icloud.com
//
//
// //Tracing a Closure 1
//
// // Examine the code below(i.e., manually trace it), in your head determine the final
// // value of the result variable, and alert the value as a numer using one line of code.
//
//     // You must give only 1 number literal as the argument to alert.
//     // Do not do any calculations. So, for example, don't use *. (Definitely do some math
//     // in your head though!)
//     // Don't pass in a string.
//     // The number must be a whole number. No Decimal points.
//
//     function mystery(){
//
//       var secret = 6; // assign it a value of 6
//
//       function mystery2(multiplier){
//         multiplier *= 3;
//         return secret  * multiplier; // return the product of secret and multplier
//       }// create a new function in the mystery function named mystery2 pass it a variable named multplier
//
//       return mystery2; // outside the mystery2 function return the value of the function in mystery();
//
//     } // create a function with the name mystery
//
//          mystery();//callback the function.
//
//     console.log(mystery); // returns the entire function
//     var hidden = mystery(); // calling back hidden will return the value of mystery
//     var result = hidden(3)  // ???
//
//     console.log(hidden(3)); // returns 54
//
//
//
//
//
//
//
//
// //Chris Samuel
// //ksamuel.chris@icloud.com
//
//
// //Tracing a Closure 1
//
// // Examine the code below(i.e., manually trace it), in your head determine the final
// // value of the result variable, and alert the value as a numer using one line of code.
//
//     // You must give only 1 number literal as the argument to alert.
//     // Do not do any calculations. So, for example, don't use *. (Definitely do some math
//     // in your head though!)
//     // Don't pass in a string.
//     // The number must be a whole number. No Decimal points.
//
//     function mystery(){
//
//       var secret = 6; // assign it a value of 6
//
//       function mystery2(multiplier){
//         multiplier *= 3;
//         return secret  * multiplier; // return the product of secret and multplier
//       }// create a new function in the mystery function named mystery2 pass it a variable named multplier
//
//       return mystery2; // outside the mystery2 function return the value of the function in mystery();
//
//     } // create a function with the name mystery
//
//          mystery();//callback the function.
//
//     console.log(mystery); // returns the entire function
//     var hidden = mystery(); // calling back hidden will return the value of mystery
//     var result = hidden(3)  // ???
//
//     console.log(hidden(3)); // returns 54
//
//
//
//
//
//
//
//
// //Chris Samuel
// //ksamuel.chris@icloud.com
//
//
// //Tracing a Closure 1
//
// // Examine the code below(i.e., manually trace it), in your head determine the final
// // value of the result variable, and alert the value as a numer using one line of code.
//
//     // You must give only 1 number literal as the argument to alert.
//     // Do not do any calculations. So, for example, don't use *. (Definitely do some math
//     // in your head though!)
//     // Don't pass in a string.
//     // The number must be a whole number. No Decimal points.
//
//     function mystery(){
//
//       var secret = 6; // assign it a value of 6
//
//       function mystery2(multiplier){
//         multiplier *= 3;
//         return secret  * multiplier; // return the product of secret and multplier
//       }// create a new function in the mystery function named mystery2 pass it a variable named multplier
//
//       return mystery2; // outside the mystery2 function return the value of the function in mystery();
//
//     } // create a function with the name mystery
//
//          mystery();//callback the function.
//
//     console.log(mystery); // returns the entire function
//     var hidden = mystery(); // calling back hidden will return the value of mystery
//     var result = hidden(3)  // ???
//
//     console.log(hidden(3)); // returns 54
//
//
//
//
//
//
//
//
// //Chris Samuel
// //ksamuel.chris@icloud.com
//
//
// //Tracing a Closure 1
//
// // Examine the code below(i.e., manually trace it), in your head determine the final
// // value of the result variable, and alert the value as a numer using one line of code.
//
//     // You must give only 1 number literal as the argument to alert.
//     // Do not do any calculations. So, for example, don't use *. (Definitely do some math
//     // in your head though!)
//     // Don't pass in a string.
//     // The number must be a whole number. No Decimal points.
//
//     function mystery(){
//
//       var secret = 6; // assign it a value of 6
//
//       function mystery2(multiplier){
//         multiplier *= 3;
//         return secret  * multiplier; // return the product of secret and multplier
//       }// create a new function in the mystery function named mystery2 pass it a variable named multplier
//
//       return mystery2; // outside the mystery2 function return the value of the function in mystery();
//
//     } // create a function with the name mystery
//
//          mystery();//callback the function.
//
//     console.log(mystery); // returns the entire function
//     var hidden = mystery(); // calling back hidden will return the value of mystery
//     var result = hidden(3)  // ???
//
//     console.log(hidden(3)); // returns 54

//Tracing a closure III

function mystery(input){
  var secret = 4;
  input += 2;
  function mystery2(multiplier){
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

  function mystery3(param){
    function mystery4(bonus){
      return param(6) + bonus;
    }
    return mystery4;
  }

  var hidden = mystery(3);
  var jumble = mystery3(hidden);
  var result = jumble(2);


  //This will return the function mystery2(mystery);
  console.log('hidden: ',hidden);

  //returns the mystery4(bonus) function
  console.log('jumble: ',jumble);

  //returns 122
  console.log('result: ',result);
