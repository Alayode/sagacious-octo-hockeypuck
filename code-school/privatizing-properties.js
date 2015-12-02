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
  var weaponList =  [ 'Excalibur','Ice Brand','Ragnarok','Save the Queen' ];
  var armorList  =  [ 'Rainbow Cloak','Doublet','Lizard Jerkin','Chain Mail' ];

  var removeWeapon = function(weapon){
    //revmove weapon from the armory
    // weaponList.slice()
    // console.log(weapon);
  };
  var replaceWeapon = function(){
    //add a weapon to the weaponList
  };
  var removeArmor = function(){
    //remove a weapons from the armorList
  };
  var replaceArmor = function(){
    //add armor to the armorList
  };

  return{
    makeWeaponRequest: function(weapon){
    //create a object that would be accessible to the global scope.
    console.log('Weapon Requested: ' + weapon);
    removeWeapon(weapon)

  },
    makeArmorRequest: function(){
      // create a object that also be available to the global scope once the function is called.
      console.log('Armor Request Acknowledge!')
    }
  };
})();




ARMORY.makeWeaponRequest('Excalibur');
// ARMORY.makeArmorRequest();
