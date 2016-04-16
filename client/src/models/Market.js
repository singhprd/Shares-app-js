var createTable = function(toAppend, array) {
  var table = document.createElement('table');
  toAppend.appendChild(table);
  for (var i = array.length - 1; i >= 0; i--) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.innerText = array[i].epic;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerText = array[i].price;
    tr.appendChild(td);
  }
};

var Stock = require('./stock.js');

var Market = function() {
  this.location = "";
  this.symbol = "FTSE";
  this.stocks = [];
};

Market.prototype.getData = function(toAppend){
  var url = '/api/market';
  var that = this;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(req, res) {
    var marketData = request.responseText;
    marketData = JSON.parse(marketData);
    for (var i = marketData.length - 1; i >= 0; i--) {
        var stock1 = new Stock(marketData[i]);
        that.stocks.push(stock1);
    }
    createTable(toAppend, that.stocks);
  };
  request.send();

};


module.exports = Market;