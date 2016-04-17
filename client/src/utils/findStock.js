  var findStock = function(marketData, epic) {
      var marketData = JSON.parse(localStorage.FTSE);
      for (var i = marketData.length - 1; i >= 0; i--) {
      if(marketData[i].epic === epic){
        return marketData[i];
      }
    }
  };

  module.exports = findStock;