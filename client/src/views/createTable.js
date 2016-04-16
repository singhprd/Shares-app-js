var createTable = function(toAppend, array) {
  var table = document.createElement('table');
  table.classList.add('pure-table')
  table.id = "market-table";

  table.onclick = function(e){
    console.log(e.path[1])
  }

  toAppend.appendChild(table);
  for (var i = array.length - 1; i >= 0; i--) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.innerText = array[i].epic;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerText = array[i].price;
    tr.appendChild(td);
  }
};

module.exports = createTable;