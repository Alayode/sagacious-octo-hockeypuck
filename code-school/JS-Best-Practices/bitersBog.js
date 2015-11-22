var bitersBog = {
  critters: ['Nipping Global Variable',
              'Sneaky For-in',
              'Bulging Blocking Script'
  ]
};

populationGetter(bitersBog);

function populationGetter(location){
  var list = '';
// when your trying to promote better optimization you should add your cached variable
// closer to where it is being used.
// var numCritters = location.critters.length;
  for(var i = 0; numCritters = location.critters.length; i < numCritters; i++){
    list += location.critters[i];
  }
  console.log(list.trim());
  return list.trim();
}
