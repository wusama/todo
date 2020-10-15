var fs = require('fs');
var path = require('path');

var todoList = require('../data/todo.json');

var sto = null;

function save() {
  var file = path.resolve(__dirname, '../data/todo.json');
  if (sto) {
    clearTimeout(sto);
    sto = null;
  }
  sto = setTimeout(() => {
    fs.writeFile(file, JSON.parse(todoList));
  }, 1000);
}

module.exports = {
  todoList,
  save,
};
