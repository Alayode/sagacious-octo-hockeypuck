

var armory = { addSword: function(sword){
   // this is correct!
   // using a logical Assignment operator "OR"
   // eliminates the read of the sword property.
  this.swords = this.swords || [];

  //this is invalid
//  this.swords = [] || this.swords;

  this.swords.push(sword);
  console.log(this.swords);
}
};
armory.addSword('IceBrand');
armory.addSword('Rune-Blade');
armory.addSword('Save-the-Queen');
armory.addSword('Excalibur');

console.log(armory.swords);
/*
We should always carefully construct our logical adssignments,
so that our default cases do not override our desired cases
or existing work.

*/

armory.retriveSword = function (request){
//  console.log(request);
  return (this.swords.indexOf(request) >= 0) ?
  this.swords.splice(this.swords.indexOf(request), 1)[0] :
  console.log("No" + request + ", baby!") ;
};


var isKnight = true;
var weapon = isKnight && armory.retriveSword("Katana");
//console.log(weapon);
