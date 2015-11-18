var a = 1;
console.log("a",a);// a 1


function b() {
  console.log("a in func b ",a);// a is global var  1
    a = 10;// a in func b  function a() {}

    console.log( "a after stores 10 ",a);// a after stores 10  10
    return;
    console.log("a after return",a);
    function a() {}
    console.log("a after function a ",a);
}
console.log("a is global var ",a);
b();
console.log("after function b ",a);



// MacBook-Pro:~ admin$
//
//
//
