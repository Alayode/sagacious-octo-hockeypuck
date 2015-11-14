//assessment-2.js

function valueChecker(x){
  if(isNan(x)) return;
  if (x < 10){
    console.log("Plus 10");
  }
  else{
    console.log("else plus 10");
  }
}
 var x = 14;
 valueChecker(x);
