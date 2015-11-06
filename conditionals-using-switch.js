
function Knight (name,regiment){
  this.name = name;
  this.regiment = regiment;
  switch (regiment) {
    case 1:
      this.weapon = "Broadsword";
      console.log("Hi I am case 1")
      console.log(this.weapon);console.log(regiment);break
  case 2:
      console.log("Hi I am Case 2");
      this.weapon = "Claymore";
      console.log(this.weapon);
      console.log("correct regiment ",regiment);
      console.log("Leaving case 2");
      break;
  case 3:
      this.weapon = "Longsword";console.log(this.weapon);console.log(regiment);break
  case 4:
      this.weapon = "Mace";console.log(this.weapon);console.log(regiment);break
  case 5:
      this.weapon = "War Hammer";console.log(this.weapon);console.log(regiment);break
  case 6:
      this.weapon = "Battle Axe";console.log(this.weapon);console.log(regiment);break
  case 7:
      this.weapon = "Halberd";console.log(this.weapon);console.log(regiment);break
  case 8:
      this.weapon = "Morning Star";console.log(this.weapon);console.log(regiment);break
  }
}


var soldier = new Knight("Timothy", 2);
console.log("Weapon ",soldier.weapon);// getting morning Star...
