var Highcharts = require('highcharts');
var findStock = require('../utils/findStock.js');

var createGraph = function(container, epic) {
  var marketData = JSON.parse(localStorage.FTSE);
  var findStock = function(marketData, epic) {
      for (var i = marketData.length - 1; i >= 0; i--) {
      if(marketData[i].epic === epic){
        return marketData[i];
      }
    }
  };
  var stock = findStock(marketData, epic);
  var prices = stock.pastCloseOfDayPrices;
  prices = prices.map(function(item) {
    return parseInt(item, 10);
  });

  this.title = stock.name;
  this.type = "line";
  // this.handleData(data, keyToUse);
  this.container = container;
  this.data = [{
    name: 'name',
    data: prices
  }];
  
  new Highcharts.Chart({
    chart: {
      renderTo: this.container,
      type: this.type,
    },
    title: {
      text: this.title,
    },
    series: this.data,
    xAxis: { 
      categories: ['7','6','5','4','3','2','1'],
      title: {
        text: "Number of Full Days Ago"
      }
    },
    yAxis: {
      title: {
        text: "Price (p)"
      },
      labels: {
        align: 'left',
        x: 0,
        y: -2
      }
    },
    credits: false
  });

}

module.exports = createGraph;

// var LineChart = function(container, data, title, keyToUse){

// };

// LineChart.prototype.handleData = function (data, keyToUse){
//   if (Array.isArray(data)) {
//     this.data = data.map(function (holding) {
//       return {
//           name: holding[i].name,
//           data: holding[i][keyToUse].map(Number)
//         }
//     });
//   } else {
//     this.data = [{
//               name: data.name,
//               data: data[keyToUse].map(Number)
//             }];
//   }

// }

// module.exports = LineChart;



