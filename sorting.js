

var  guests = ['Battler','Maria','Beatrice','George','Rosa','Rudolph','Genji','Kirie','Shannon','Kanon'];
console.log('Guests ', guests);
setTimeout(sortGuest,2000)
console.log('Alphabetizing guest.....')
  function sortGuest(){
      var sorted = guests.sort();
      console.log('\nAlphabetize',sorted)
  }
