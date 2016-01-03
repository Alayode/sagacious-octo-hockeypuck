function mystery(input){

  var secret = 5; // assign it a value of 6

  function mystery2(multiplier){
    multiplier *= input;
    return secret * multiplier; // return the product of secret and multplier
  }// create a new function in the mystery function named mystery2 pass it a variable named multplier

  return mystery2; // outside the mystery2 function return the value of the function in mystery();

} // create a function with the name mystery

var hidden = mystery(4); // calling back hidden will return the value of mystery
var result = hidden(2)  // ???

console.log(result)// will return 40 "Can you tell me why?"
