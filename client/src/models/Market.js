var Stock = require('./stock.js');

var Market = function() {
  this.location = "";
  this.symbol = "FTSE";
  this.stocks = [];
};

Market.prototype.getData = function(callback){
  var url = '/api/market';
  var that = this;
  // scope inside XMLRequest is different than inside prototype!
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(req, res) {
    var marketData = request.responseText;
    marketData = JSON.parse(marketData);
    for (var i = marketData.length - 1; i >= 0; i--) {
      var stock1 = new Stock(marketData[i]);
      that.stocks.push(stock1);
    }
    window.localStorage.clear();
    window.localStorage.setItem(that.symbol, request.responseText);
    callback();
  };
  request.send();

};


module.exports = Market;

