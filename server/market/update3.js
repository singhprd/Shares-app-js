var MongoClient = require('mongodb').MongoClient;
var updatePortfolioShares = require('../portfolio/update_portfolio');
var url = 'mongodb://localhost:27017/dolla_dolla_db';

var update3 = function(stockArray) {
    // function open

    MongoClient.connect(url, function(err, db) {
        if(err) {
            console.log(err);
            return;
        }
        // console.log(stockArray.length);
        var market = db.collection('market');
        
        market.drop(function() {
            market.insert(stockArray);
            db.close(updatePortfolioShares.bind(this, stockArray));
        });
    });
// function close
};

module.exports = update3;