//
//
// //
// // Chris Samuel
// // ksamuel.chris@me.com
// //
// // Github: github.com/alayode
//
//
// var result1 = " King" && "Arthur";
// console.log("result1",result1); //Arthur
//
//
// var result2 ="Arthur" && "King";
// console.log("result2",result2); // King
//
// /*
// Once all values are verified to be "truthy",
// the logical assignment returns the last values
// encountered.
// */
//
//
// var result3 = " King" || "Arthur";
// console.log("result3",result3); // King
//
// /*
// For comparison, check out the OR results, which
// we've already seen. The first "truthy" value
// encountered gets returned.
// */
//
// var result4 = "Arthur" || "King";
// console.log("result4",result4); //Arthur
//
//
// /*
// When all elements are truthy, && will return the LAST "truthy" value found.
// */
//
// // When all elements are "falsy. AND will return the FIRST "falsy" value found.
// var result5 = undefined && "";
// console.log("result5",result5); //undefined
//
//
// var result6 = "" && undefined;
// console.log("result6",result6); // ""
//
// /*As you might expect, the first "falsy" is returned in short-circuit style*/
//
// var result7 = undefined || "";
// console.log("result7",result7); // ""
//
//
// var result8 = "" || undefined;
// console.log("result8",result8); // undefined
//
//


// 1.14 Journey's Beginning
 // var  aiedraIsConvincing = true ;
 // var  dhunnIsCurious = true ;
 //
 // var beginJourney = aiedraIsConvincing && dhunnIsCurious ;
 // console.log(beginJourney);
 //

 var strength = true;
 var fear = true;
 var pack = {
   food: [ 'carrot',
           'mystery meat',
           'apple',
           'crust of bread',
           'spicy dried sausage',
           'carrot',
           'wedge of sharp cheese',
           'jug of milk',
           'mystery meat',
           'carrot'
   ],
   addFood: function(foodItem) {
     this.food = this.food || [];
     this.food.push(foodItem);
   },
   enoughFood: function(amount) {
     return(this.food.length >= amount);

   }


 };

 console.log(pack.enoughFood(10));
 var surviveThisTrial = strength && !fear && pack.enoughFood(10);
 //console.log(pack.food.length == 10)
 console.log(surviveThisTrial);
