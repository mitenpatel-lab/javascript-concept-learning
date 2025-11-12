const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');
const multer = require('multer');
const upload = multer();


function checkTodo(req, res, next) {
    const { todo } = req.body;

    if (!todo) {
        return res.status(400).json({ success: false, message: "Todo text is required" });
    }

    next();
}

router.post('/', upload.none(), checkTodo, todoController.createTodo);
router.get('/', todoController.getAllTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);



module.exports = router;