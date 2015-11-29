//Number Nonsense I
//Chris Samuel
//Github : Alayode
//email: ksamuel.chris@icloud.com


var birdFeeder = {
  totalFeed: 4,
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


    // var feedRequested = 0;
    // console.log(feedRequested ,'inside ');
  }
}


//
// birdFeeder.getFeed();
// console.log(birdFeeder.totalFeed);
