const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./Routers/userRoute');
const todoRoutes = require('./Routers/todoRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('', userRoutes);
app.use('/todos', todoRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});