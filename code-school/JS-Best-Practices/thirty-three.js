

function starter(){
  var x,y;
  x = 9;
  y = multiplier(x);
  x = ender(y);
  console.log(x);

  return true;
}

console.log(starter); //[Function: starter]

function multiplier(y){
  var x, z;
  x = 10;
  z = y * x;
  return z;
 }


console.log(multiplier);//[Function:multiplier]

function ender(z){
  var x,y;
  x = 5;
  y = multiplier(z+x);
  return y;
}
console.log(ender);//[Function:ender]
