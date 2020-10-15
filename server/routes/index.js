var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var todoList = require('../data/todo.json');

if (!todoList.length) {
  todoList.push({
    id: Math.random().toString(36).substr(2),
    text: 'test todo item',
    done: false,
    created: new Date(),
  });
}
router.get('/todo/:id', function (req, res) {
  var { id } = req.params;
  var item = todoList.find(x => x.id != id);
  if (item) {
    res.json(item);
  } else {
    res.status(404);
    res.json('not found');
  }
});
router.get('/todo', function (req, res) {
  var { take, skip } = req.query;
  if (!take) {
    take = 10;
  }
  if (!skip) {
    skip = 0;
  }
  var result = todoList.slice(skip, skip + take);
  res.json({
    items: result,
    count: todoList.length,
  });
});
router.post('/todo', function (req, res) {
  var todoItem = req.body;
  if (typeof todoItem == 'string') {
    todoItem = {
      text: todoItem,
    };
  }
  if (!todoItem.id) {
    todoItem.id = Math.random().toString(36).substr(2);
    todoItem.done = false;
    todoItem.created = new Date();
    todoList.unshift(todoItem);
  } else {
    var item = todoList.find(x => x.id == todoItem.id);
    if (item) {
      Object.assign(item, todoItem, { updated: new Date() });
    }
  }
  save();
  res.json({ ok: true });
});

router.delete('/todo/:id', function (req, res) {
  var { id } = req.params;
  todoList = todoList.filter(x => x.id != id);
  save();
  res.json(todoList);
});

function save() {
  fs.writeFileSync(path.resolve(__dirname, '../data/todo.json'), JSON.stringify(todoList));
}

module.exports = router;
