

function theBridgeOfHoistingDoom() {
  function balrog() {
    return "fire";
  }
  var ring;
  function elf() {
    return "pointy ears";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  var power = ring();
  return elf();
  function elf() {
    return "immortal";
  }
}

var a = theBridgeOfHoistingDoom();

console.log(a);