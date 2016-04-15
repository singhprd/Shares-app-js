var Portfolio = require('../Portfolio');
var Stock = require('../stock');
var assert = require('assert');

var params = {"_id":"570f8b04a17a11ab99b11aaa","change":"-9.000000","chg_percent":"-2.830189","day_high":"311.899994","day_low":"309.000000","name":"INTU","price":"309.000000","epic":"INTU","ts":"1460635516","type":"equity","utctime":"2016-04-14T12:05:16+0000","volume":"818967","year_high":"366.500000","year_low":"269.200000","pastCloseOfDayPrices":["318.00","311.80","317.20","315.90","309.90","313.50","310.70"],"lastUpdated":"Thu Apr 14 2016 13:20:19 GMT+0100 (BST)"};
var params2 = {"_id":"570f8b04a17a11ab99b11aaa","change":"-9.000000","chg_percent":"-2.830189","day_high":"311.899994","day_low":"309.000000","name":"INTU","price":"309.000000","epic":"INTU","ts":"1460635516","type":"equity","utctime":"2016-04-14T12:05:16+0000","volume":"818967","year_high":"366.500000","year_low":"269.200000","pastCloseOfDayPrices":["318.00","311.80","317.20","315.90","309.90","313.50","310.70"],"lastUpdated":"Thu Apr 14 2016 13:20:19 GMT+0100 (BST)"};

describe('portfolio', function(){
    var testStock = new Stock(params);
    var testStock2 = new Stock(params2);
    var testPortfolio = new Portfolio();
    testPortfolio.stocks.push(testStock);
    testPortfolio.stocks.push(testStock2);
    testPortfolio.owner = ("Peter");


  it('should have stocks', function(){
    assert.equal(testPortfolio.stocks.length, 2);
  });

  it('should have an owner', function() {
    assert.equal(testPortfolio.owner, 'Peter');
  });
});