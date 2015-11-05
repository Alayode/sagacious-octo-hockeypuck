

//Chris Samuel
//ksamuel.chris@me.com


var prices = [3,1,5,4,2];

  prices.sort(function(a,b){
    console.log(a + ' - ' + b +' = ' + (b - a));
    return a - b;
  });
  console.log(prices);
