var d = new Date();
whatDay = d.getDay();

console.log(d);
console.log(whatDay);

switch (whatDay) {
  case 5:
    console.log("TGIF")
    break;
  case 6:
      console.log("Saturday")
    break;
  case 0:
    console.log("Sunday");
  default:
    console.log("I could use a rest day")
}
