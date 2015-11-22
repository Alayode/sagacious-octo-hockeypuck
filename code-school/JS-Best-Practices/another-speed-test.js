var IP = ['Nipping Global Variable', 'Sneaky Forin', 'Bulging Blocking Script'],
GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra'],
inhabitants = [IP,GH];

function populationGetterConcat(popn) {
  var list = '';
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ');
    }
  }
  return list;
}

populationGetterConcat(inhabitants);

function populationGetterJoin(popn) {
  var list = [];
  for (var i = 0, x = popn.length; i < x; i++) {
    list.push(popn[i].join(', '));
  }
  return list.join(', ');
}

populationGetterJoin(inhabitants);

var concatTest = new SpeedTest(populationGetterConcat, inhabitants, 100000);
concatTest.startTest();
var populationGetterJoin = new SpeedTest(populationsGetterJoin);
concatTest.joinTest();


/*
2.27 Another SpeedTest

Now that you know how to implement one SpeedTest, we have added a new
populationsGetterJoin function to test. When building a new instance
of this test, allow the constructor to assign the default number of
repetitions to use and the name the test joinTest


*/
