// models
var Stock = require('./models/stock.js');
var Portfolio = require('./models/portfolio.js');
var Market = require('./models/market.js');
var navBar = require('./views/nav_bar.js');
// views
var createTable = require('./views/createTable.js')

window.onload = function() {
  // get elements
  var navDiv = document.getElementById('nav-div');
  var container = document.getElementById('container');
  // make pure left and right columns
  var left = document.createElement('div');
  left.classList.add('pure-u-12-24')
  container.appendChild(left);
  var right = document.createElement('div');
  right.classList.add('pure-u-12-24')
  container.appendChild(right);
  // make navbar
  navBar(navDiv);
  // create a market
  var FTSE350 = new Market();
  // 
  FTSE350.getData(function(){
    createTable(left, FTSE350.stocks);
  });

};