var navBar = function(toAppend) {
  links = ["Home", "Portfolio", "Market"];
  var ul = document.createElement('ul');
  toAppend.appendChild(ul);
  for (var i = links.length - 1; i >= 0; i--) {
    var li = document.createElement('li');
    li.innerText = links[i];
    ul.appendChild(li);
  }
};

module.exports = navBar;  