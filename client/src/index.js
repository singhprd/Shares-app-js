// models
var Stock = require('./models/stock.js');
var Portfolio = require('./models/portfolio.js');
var Market = require('./models/market.js');
var navBar = require('./views/nav_bar.js');
// views
var createTable = require('./views/createTable.js');
var createGraph = require('./views/createGraph.js');
var createStockInfoTable = require('./views/createStockInfoTable.js');

window.onload = function() {
  // get elements
  var navDiv = document.getElementById('nav-div');
  var container = document.getElementById('container');
  // make pure left and right columns
  var left = document.createElement('div');
  left.classList.add('pure-u-12-24');
  left.id = "container-left"
  container.appendChild(left);
  var right = document.createElement('div');
  right.classList.add('pure-u-12-24')
  right.id = "container-right"  
  container.appendChild(right);
  // make navbar
  navBar(navDiv);
  // create a market
  var FTSE350 = new Market();

  FTSE350.getData(function(){
    createTable(left, FTSE350.stocks);
    var marketTable = document.getElementById('market-table');

    marketTable.onclick = function(e){
      var b = e.path[0];
      if(b.toString() === "[object HTMLTableElement]"){

      } else {
        for (var i = marketTable.childNodes.length - 1; i >= 0; i--) {
          marketTable.childNodes[i].style = "background-color: white;"
        }
        var clickedEpic = e.path[1].firstChild.innerHTML;
        var a = e.path[1]
        a.style = "background-color: #003399; color: white;"
        var table = document.getElementById("market-table");
        createGraph(right, clickedEpic);
        createStockInfoTable(right, clickedEpic);
      }
    };
    // show graph and table onload - RBS is default
    createGraph(right, 'RBS');
    createStockInfoTable(right, 'RBS');
  });

};