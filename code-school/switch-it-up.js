function sansTemple(direction) {
  var happensNext;
    switch (direction) {
      case "right hallway":
         this.happensNext = 'You find a door, it is locked. You head back from where you came.'
      case 'left hallway':
         this.happensNext = 'You find a door, it is locked. You head back from where you came.'
}
  return happensNext;
}
sansTemple();
var place = new sansTemple("right hallway");
console.log(place);
