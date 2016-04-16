var Stock = require('./models/stock.js');
var Portfolio = require('./models/portfolio.js');
var Market = require('./models/market.js');
var navBar = require('./views/nav_bar.js');

window.onload = function() {
  var container = document.getElementById('container');
  navBar(container);
  var FTSE350 = new Market();
  FTSE350.getData(container);
};
