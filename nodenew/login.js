const express = require('express');
const app = express();

app.use(express.json());
function authenticate(req, res, next) {

    const { user, password } = req.body;

    if (user != "miten")
        return res.status(401).send("Username is invalid");
    if (password != "miten")
        return res.status(401).send("Password is incorrect");
    next();

}



app.get('/login', authenticate, (req, res) => {
    res.status(200).send(`Welcome to the portal ${req.body.user}`);
})

app.listen(3000, () => {
    {
        console.log("server is listening on port 3000")
    }
});