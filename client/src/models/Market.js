var Stock = require('./stock.js');


var Market = function() {
  this.location = "";
  this.symbol = "";
  this.stocks = [];
};

Market.prototype.getData = function(){
  var url = '/api/market';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(req, res) {
    var marketData = request.responseText;
    marketData = JSON.parse(marketData);
    for (var i = marketData.length - 1; i >= 0; i--) {
      var stock1 = new Stock(marketData[i]);
      console.log(this);
    }
  };
  request.send();
};


module.exports = Market;