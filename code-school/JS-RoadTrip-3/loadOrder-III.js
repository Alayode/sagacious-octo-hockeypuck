function theBridgeOfHoistingDoom() {
  function fellowship() {
    return "friends";
  }
  var sword = "sting";
  var dwarf = function() {
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  var ring = function() {
    return "precious";
  };
}
