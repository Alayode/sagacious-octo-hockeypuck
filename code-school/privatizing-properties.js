// Chris Samuel
// ksamuel.chris@gmail.com
/*
JavaSCript uses lexical scoping which  means thats function are executed using
the variable scope that is in effect when they are invoked. All JavaScript functions
are closures:

they are objects and they have a scope chain associated with them.

Github: alayode

*/

var ARMORY = (function(){
  var weaponList =  [ * list of weapons object * ];
  var armorList  =  [ *list of armor objects * ];

  var removeWeapon = function(...){};
  var replaceWeapon = function(...){};
  var removeArmor = function(...){};
  var replaceArmor = function(...){};
  
})();
