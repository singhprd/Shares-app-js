var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dolla_dolla_db';

module.exports = function (callback) {
  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log(err);
      return;
    }
    var market = db.collection('market');
    market.find({}).toArray(function(err, docs) {
      callback(docs);
      db.close();
    });
  });
}