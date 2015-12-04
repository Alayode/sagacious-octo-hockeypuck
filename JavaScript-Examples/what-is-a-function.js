
//
// Chris Samuel
// ksamuel.chris@icloud.com
//
// filename: what-is-a-function.js
// description:
//  Functions let you group a series of statementes together to perform
// a specific task. If different parts of a script repeat the same task,
// you can reuses the function rather then repeat the same set of statements).




// Compute the distance between the Cartesian points (x1,y1) and (x2,y2)

// x1,y1,x2,y2
// these are know as parameters pieces of information passed to the function


  function distance(x1,y1,x2,y2){
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
  }

var compute = distance(5,3,10,6);

console.log(compute) //1.4142135623730951

//return value
// When you write a function and expect it to provide you with a answer
