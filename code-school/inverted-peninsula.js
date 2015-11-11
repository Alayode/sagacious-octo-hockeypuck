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
  // Add an extra humans method property to the inhabitants array to return all Humans
  this.inhabitants.humans = function(){
    /* returns all Human inhabitatans*/
  };
  // create a new invertedPeninsula instance
  var invertedPeninsula = new InvertedPeninsula();
  // Log the name of each invertedPeninsula inhabitants

}
