function sansTemple(direction) {
  var happensNext;
    switch (direction) {
      case "right hallway":
         this.happensNext = 'You find a door, it is locked. You head back from where you came.' ;break;
      case 'left hallway':
         this.happensNext = 'You find a door, it is locked. You head back from where you came.' ;break;
      case 'lower tunnel':
          this.happensNext = 'You find a door, it is locked. You head back from where you came.' ;break;
      case 'hidden door':
          this.happensNext = 'You go through the door into a room. A small,very dark, room, that smells of dust and sulfur....' ;break;
      default :
      this.happensNext = 'You stand there , gaping not moving . Aiedra wonders, are you alive?' ;break ;
       }
  return happensNext;
}
sansTemple();
var place = new sansTemple("right hallway");
console.log(place);
