var a = 1;
console.log("a",a);
function b() {
  console.log("a in func b ",a);
    a = 10;
    console.log( "a after stores 10 ",a);
    return;
    console.log("a after return",a);
    function a() {}
    console.log("a after function a ",a);
}
console.log("a is global var ",a);
b();
console.log("after function b ",a);
