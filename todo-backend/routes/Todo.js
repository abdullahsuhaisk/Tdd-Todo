const express = require('express');
const TodoModel = require('../Models/TodoModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const todo = new TodoModel({
    todo: req.body.todo
  })
  try {
    const savedTodo = await todo.save();
    // res.json(savedTodo,{message: "todo added"})
    res.status(200).send({message: "todo added", id:savedTodo._id})
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
})

module.exports = router;
