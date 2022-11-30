const Todo = require("../model/schema");

const getTodos = (req, res) => {
  Todo.findById(req.params.todoID, (err, todo) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todo);
    }
  });
};

module.exports = getTodos;
