

exports.getAllUser = async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const allUsers = await response.json();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getUser = async (req, res) => {
    try {
        const Id = req.params.Id;
        const response = await fetch(`https://dummyjson.com/users/${Id}`);
        const allUsers = await response.json();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.DeleteUser = async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const allUsers = await response.json();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//     // console.log(path.join(__dirname, "package.json"));
//     const data = req.query;
//     if (Object.keys(data).length == 0) {
//         res.send('Welcome to the Express.js Tutorial');
//     } else {

//         res.send(`Welcome to Express Js${JSON.stringify(data)}`);
//     }
// });

// app.post('/save', (req, res) => {

//     // console.log(req.body);
//     res.status(200).send(`My Name is ${req.body.name}`);

// });
