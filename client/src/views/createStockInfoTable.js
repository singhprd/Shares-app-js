var findStock = require('../utils/findStock.js');

var createStockInfoTable = function(container, epic){
  var marketData = JSON.parse(localStorage.FTSE);

  var findStock = function(marketData, epic) {
    for (var i = marketData.length - 1; i >= 0; i--) {
      if(marketData[i].epic === epic){
        return marketData[i];
      }
    }
  };

  var stock = findStock(marketData, epic);
  var table = document.createElement('table');
  container.appendChild(table);
  table.id = 'stock-info-table';
  table.classList.add("pure-table");
  var tr1 = document.createElement('tr');
  var tr2 = document.createElement('tr');
  table.appendChild(tr1);
  table.appendChild(tr2);
  for(var key in stock){
      if(key == "_id" || key == "ts" || key == "pastCloseOfDayPrices" || key == "utctime" || key == "lastUpdated" ){
        // console.log(key)
      } else {
      var td = document.createElement('td');
      td.innerText = key;
      tr1.appendChild(td);

      var td2 = document.createElement('td');
      td2.innerText = stock[key];
      tr2.appendChild(td2);
    }
  }
}

module.exports = createStockInfoTable;

// _id
// createStockInfoTable.js:21 change
// createStockInfoTable.js:21 chg_percent
// createStockInfoTable.js:21 day_high
// createStockInfoTable.js:21 day_low
// createStockInfoTable.js:21 name
// createStockInfoTable.js:21 price
// createStockInfoTable.js:21 epic
// createStockInfoTable.js:21 ts
// createStockInfoTable.js:21 type
// createStockInfoTable.js:21 utctime
// createStockInfoTable.js:21 volume
// createStockInfoTable.js:21 year_high
// createStockInfoTable.js:21 year_low
// createStockInfoTable.js:21 pastCloseOfDayPrices
// createStockInfoTable.js:21 lastUpdated