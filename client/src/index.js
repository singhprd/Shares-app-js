var Stock = require('./models/stock.js');
var Portfolio = require('./models/portfolio.js');
var Market = require('./models/market.js');

window.onload = function() {
  var FTSE350Market = new Market();
  FTSE350Market.getData();
};
