const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');


router.post('/', todoController.createTodo);
router.get('/', todoController.getAllTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);



module.exports = router;