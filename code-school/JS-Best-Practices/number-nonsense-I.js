//Number Nonsense I
//Chris Samuel
//Github : Alayode
//email: ksamuel.chris@icloud.com


var birdFeeder = {
  totalFeed: 4.000,
  getFeed: function(feedRequested) {
    //set a variable to 0 to represent the feed that needs to be returned.
    var returnedFeed = 0;
    //check to make sure our totalFeed we have is not less then the amount requested.
    if(returnedFeed >= feedRequested){
      //do this
      returnedFeed = feedRequested;
      this.totalFeed -= feedRequested;
    } else {
      //do this when there is not enough food.
      returnedFeed = this.totalFeed; //return the amount of feed that is left
      this.totalFeed = 0; //set the feed to zero
    }
    //toFixed() method on returnedFeed so the value is rounded to 1 decimal place.
    // ensure that our return value is a number and not a string.
    return parseFloat(returnedFeed.toFixed(1))  ;
    var parsed = parseFloat(returnedFeed.toFixed(1));
    // var feedRequested = 0;
    // console.log(feedRequested ,'inside ');
  },
  // we need a fill feeder function to handle the
  fillFeed: function(additionalFeed){
    var additionalFeed = 4;
    this.totalFeed += additionalFeed;
  }
}

console.log(birdFeeder.getFeed());

//lets add food the feeder
// birdFeeder.fillFeed(); // plus 4  (4+4) = 8
// console.log('feeder has: ',birdFeeder.totalFeed);// should be 8
