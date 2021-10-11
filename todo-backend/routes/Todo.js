const express = require('express');
const TodoModel = require('../Models/TodoModel');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body)
  const todo = new TodoModel({
    duty: req.body.duty,
    done: req.body.done
  })
  try {
    const savedTodo = await todo.save();
    res.status(200).send({message: "todo added", id:savedTodo._id})
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
})

module.exports = router;
