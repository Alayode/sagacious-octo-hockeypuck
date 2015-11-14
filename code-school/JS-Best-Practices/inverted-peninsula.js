//Chris Samuel
//ksamuel.chris@gme.com
//Filename : Inverted Peninsula


var InvertedPeninsula = function(){
  this.inhabitants = [
    {
      name: "Choshizen",
      race:  "Elvaan"
    },
    {
      name: "Tessius",
      race:  "Hume"
    }
  ];
  console.log("My People ",inhabitants)

  // Add an extra humans method property to the inhabitants array to return all Humans
  this.inhabitants.humans = function(){
    /* returns all Human inhabitatans*/
    console.log(" My Humans!!!")
  };
  // create a new invertedPeninsula instance
  var invertedPeninsula = new InvertedPeninsula(); //causes a infinite callback BAD BAD BAD

  // Log the name of each invertedPeninsula inhabitants
        for(var i = 0, o = invertedPeninsula.inhabitants; i < o.length; i++){
            console.log(invertedPeninsula.inhabitants[i].name);
  }
};

InvertedPeninsula();


// var ppl = inhabitants;
// console.log(ppl);
// var g = new InvertedPeninsula();
