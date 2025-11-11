
let todos = [];

function getAllTodo(req, res) {

    if (todos.length == 0) {
        return res.status(400).json({ success: false, message: "Todo is Empty" })
    }

    return res.status(200).json(todos);

}

function updateTodo(req, res) {

    const id = parseInt(req.params.id);
    const findTodo = todos.filter((todo => todo.id === id));

    console.log(findTodo);

    if (findTodo.length == 0) {
        return res.status(400).json({ success: false, message: "no todo with that id" })
    }

    findTodo[0].text = req.body.text;

    return res.status(200).json({
        success: true,
        message: "todo is updated",
        updatedTodo: todos,
    });

}


function createTodo(req, res) {
    const { todo } = req.body;

    if (!todo) {
        return res.status(400).json({ success: false, message: "Todo text is required" });
    }
    const newTodo = {
        id: todos.length + 1,
        text: todo,
        completed: false,
    };

    todos.push(newTodo);

    res.status(201).json({
        success: true,
        message: "Todo created successfully",
        todo: newTodo,
    });
}

function deleteTodo(req, res) {

    const id = parseInt(req.params.id);
    const findTodo = todos.filter((todo => todo.id === id));

    // console.log(findTodo);

    if (findTodo.length == 0) {
        return res.status(400).json({ success: false, message: "no todo with that id" })
    }

    todos = todos.filter(item => item.id !== id);


    return res.status(200).json({
        success: true,
        message: "todo is removed",
        Updatedtodo: todos,
    });

}




module.exports = { getAllTodo, createTodo, updateTodo, deleteTodo }