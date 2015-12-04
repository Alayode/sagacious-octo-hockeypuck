
/*
Chris Samuel
ksamuel.chris@me.com
*/

//Sorting with numbers...
// By Default numbers are also sorted lexicographically.
// you can get some unexpected results....
//If you want to get around this....
// Wait....

//Lets show an example of using sort with numbers..
//
// var stockPrices = [6.94 , 125.03, 19 , 156, 1];
//   stockPrices.sort();
//   console.log(stockPrices); // returns [ 1, 125.03, 156, 19, 6.94 ]
//
  // this is not what you would actually want if you wanted to sort numbers.
  // Probably would prefer to sort in increasing or decreasing order...


   //we will use the variables 'a' and 'b' to sort the values in our array.

   var stockPrices = [6.94 , 125.03, 19 , 156, 1];
        //lets places a number ordering function in the sort method
      stockPrices.sort(function(a , b){
        return a - b;
      });
      // print the result to the terminal
      console.log(stockPrices);

        // [ 1, 6.94, 19, 125.03, 156 ]

        // Now this is one way to order numbers in an array..






// END
