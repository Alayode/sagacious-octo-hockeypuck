

//Chris Samuel
/*"We find ourselves currently within the bitersBog on the invertedPeninsula, a dangerous place for memory, overwritten data, and speed. The creatures here, despite our recommendations, have added many methods to the Array prototype. Now, they are confused as to how their populationGetter function should be built. In this situation, what sort of loop will allow us to build the variable list as a single string
of the Inverted Pensinsula's critters?"*/


Array.prototype.killTheInsolent = function(){};
Array.prototype.countPopulace = function(){};
Array.prototype.countUndeadPopulace = function(){};
Array.prototype.insecticide = function(){};
Array.prototype.shadowProvider = function(){};

var bitersBog = {
  critters: ['Nipping Global Variable',
             'Sneaky For-in',
             'Bulging Blocking Script']
}

populationGetter(bitersBog);

function populationGetter(location) {
  var list = '';
  // What sort of loop should go here?
  return list.trim();
}

console.log(bitersBog)


// for-in Loop would only include methods that were added to the
// Array prototype, as well any methods added directly as properties of the
// critters array itself.
