var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

router.get('/', async (req, res) => {
  var todos = await Todo.find({}).sort({ date: 'desc' });
  console.log(todos);

  res.render('index', { todos: todos });
});

router.get('/new', (req, res) => {
  res.render('new');
})

router.post('/', async (req, res) => {
  var { title, description, date } = req.body;
  if (!title || !description || !date) {
    res.redirect('/new');
    return;
  }

  console.log(title + " " + description + " " + date);

  var todo = Todo({
    title: title,
    description: description,
    date: date
  });
  await todo.save();
  res.redirect('/');
})


router.get('/edit/:id', async (req, res) => {
  var todo = await Todo.findById(req.params.id);
  if (todo)
    res.render('edit', { todo: todo });
  else
    res.redirect('/');
})

router.post('/edit/:id', async (req, res) => {

  var todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.redirect('/');
    return;
  }
  var { title, description, date } = req.body;
  if (!title || !description) {
    res.redirect('/');
    return;
  }
  console.log(title + " " + description + " " + date);

  todo.title = title;
  todo.description = description;
  if (date)
    todo.date = date;
  await todo.save();
  res.redirect('/');

})

router.get('/delete/:id', async (req, res) => {
  var todo = await Todo.findByIdAndDelete(req.params.id);
  console.log(todo);
  res.redirect('/');
});

router.get('/complete/:id', async (req, res) => {
  var todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.redirect('/');
    return;
  }
  todo.status = "Completed";
  await todo.save();
  console.log(todo);

  res.redirect('/');
});
module.exports = router;