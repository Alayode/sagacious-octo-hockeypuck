var empty = null;
var x,y,z;
function starter(){
  var x,y;
  x = 9;
  y = multiplier(x);
  console.log(y);
  x = ender(y);
  console.log(x);

  return true;
}

starter();
console.log(starter); //[Function: starter]

function multiplier(y){
  var x, z;
  x = 10;
  z = y * x;
  return z;
 }

multiplier(y);
console.log(multiplier);//[Function:multiplier]

function ender(z){
  var x,y;
  x = 5;
  y = multiplier(z+x);
  return y;
}

ender(z);
console.log(ender);//[Function:ender]
console.log(empty);
