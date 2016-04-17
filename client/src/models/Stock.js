var Stock = function(params) {
  this._id = params._id;
  this.change = params.change;
  this.chg_percent = params.chg_percent;
  this.day_high = params.day_high;
  this.day_low = params.day_low;
  var name = params.name.replace("&amp;", "&");
  this.name = name;
  this.price = params.price;
  this.epic = params.epic;
  this.ts = params.ts;
  this.type = params.type;
  this.utctime = params.utctime;
  this.volume = params.volume;
  this.year_high = params.year_high;
  this.year_low = params.year_low;
  this.pastCloseOfDayPrices = params.pastCloseOfDayPrices;
  this.lastUpdated = params.lastUpdated;
};

Stock.prototype.drawTable = function(toAppend) {
  var table = document.createElement('table');
  toAppend.appendChild(table);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.innerText = this.epic;
  tr.appendChild(td);
};

Stock.prototype.logEpic = function() {
  console.log(this.epic);
};

module.exports = Stock;