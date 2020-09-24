var express = require('express');
var router = express.Router();

var todoList = [{
  text: '这是一个测试数据',
  done: true,
  created: new Date(),
}];
router.get('/todo', function (req, res, next) {
  res.json(todoList);
});
router.post('/todo', function (req, res, next) {
  var todoItem = req.body;
  if (typeof todoItem == 'string') {
    todoItem = {
      text: todoItem,
    };
  }
  todoItem.done = false;
  todoItem.created = new Date();
  todoList.unshift(todoItem)
  res.json({ ok: true })
});

module.exports = router;
