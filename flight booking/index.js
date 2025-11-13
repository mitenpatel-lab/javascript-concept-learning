require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const authRoute = require('./routes/authroute');
const flightRoute = require('./routes/flightRoute');

//app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'views')));


app.use('/login', authRoute);
app.use('/api/flights', flightRoute);


app.listen(3000, () => {
    console.log("server is listening on port 3000");
});