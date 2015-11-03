

function test(){
  console.log(a);
  console.log(foo());

   var a = 1;
   function foo(){
     return 2;
   }
}

  test(); //Will print undefined and 2
