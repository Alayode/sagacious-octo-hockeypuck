console.log("黄金を見つけれました");
var x = treasureChest.necklaces.length;
for(var i = 0; i < x; i++){
  console.log(treasureChest.necklaces[i]);
};


treasureChest : {

  goldCoins: 10,000,
  magicalItem: "Crown of Speed",
  necklaces: ["ruby", "pearl","sapphire","diamond"],
  openLid: function() {
    console.log("Opened Lid");
  }
  }
