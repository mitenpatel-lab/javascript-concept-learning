const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(express.static('public'))

app.use(cookieSession({
    //maxAge: 24 * 60 * 60 * 1000,
    keys: ["name"]
}))

app.get('/name', (req, res) => {

    req.session.views = (req.session.views || 0) + 1;
    res.send(`You visited this page ${req.session.views} times`);
});

app.get('/logout', (req, res) => {


    req.session = null;
    res.send("session is cleared")
});

app.get('/user/:name', (req, res) => {



    res.send(`Welcome to Home Page ${req.params.name}`);
});
app.get('/content', (req, res) => {
    if (req.accepts('json'))
        res.status(200).json({ "name": "jay" })

    res.status(406).send('Not Acceptable');

    // res.send(`Welcome to Home Page`);
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});
app.listen(3000, () => {
    {
        console.log("server is listening on port 3000")
    }
});
