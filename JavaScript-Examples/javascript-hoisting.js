

Chris Kayode Samuel
github.com/alayode

Understanding Hoisting....
  When writing javascript code you have to understand hoisting.
  This can 


(function() {
  console.log(foo + " " + bar + " " + baz);//undefined undefined undefined
  var foo = 1;//1
  console.log(foo + " " + bar + " " + baz);// 1 undefined undefined
  var bar = 2;//2
  console.log(foo + " " + bar + " " + baz);// 1 2 undefined
  var baz = 3; // 3
  console.log(foo + " " + bar + " " + baz);// 1 2 3
})();
