
function Knight (name,regiment){
  this.name = name;
  this.regiment = regiment;
  switch (regiment) {
    case 1:
      this.weapon = "Broadsword";
  case 2:
      this.weapon = "Claymore";
  case 3:
      this.weapon = "Longsword";
  case 4:
      this.weapon = "Mace";
  case 5:
      this.weapon = "War Hammer";
  case 6:
      this.weapon = "Battle Axe";
  case 7:
      this.weapon = "Halberd";
  case 8:
      this.weapon = "Morning Star";
  }
}


var soldier = new Knight("Timothy", 2);
console.log(soldier.weapon)
