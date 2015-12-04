//first build a CAVESOFCLARITY namespace
//assign to it an empty function expression that is immediately invoked
//don't use var for augmentation

//Next pass the caves variable as a parameter and then
//apply the CAVEOSCLARITY to the bottom of the closure.
CAVESOFCLARITY = (function(){

  // inside our module create a local variable and assign it an empty string
    var sandScript = '';

    //create a new public method in the module,
  caves.setSandScript = function(message){
    sandScript = message;
  };

  //return your newly augmented caves module
  return caves;

})(CAVEOSCLARITY);
