

(function converter(){
  var i, cats = new Array();
  cats[0] = 'Jaguar';
  cats[1] = 'Cougar';
  cats[2] = 'Puma';
  cats[3] = 'Panther';
  console.log(cats)
  for(i in cats){
    switch(i)
    {
      case 'Puma':
      i="Lynx"
      break;
      case "Lynx":
      i = "Pinto"
      break;
    }
  }
})();
