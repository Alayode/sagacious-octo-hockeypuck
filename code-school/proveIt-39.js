// Conditions and Loops

var snowTires = new Array('tire0','tire1','tire2','tire3','tire4')
for (var i =0; i <  snowTires.length; i++){
  if(snowTires[i]){
    console.log("snowTires " + i + " is available.");
  } else {
    console.log("snowTires" + i + "is not available");
  }
}
