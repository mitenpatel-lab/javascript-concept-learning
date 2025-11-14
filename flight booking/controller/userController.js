const users = require('../model/users');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const SECRET_KEY = process.env.SECRET_KEY;
exports.login = (req, res) => {

    let role = "";
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Username/Password is incorrect' });
        }
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        role = user.role;
        //debugger;
        res.json({ success: true, token, username: user.username, role: role });
    } catch (e) {
        console.log(e);

    }
}

exports.getAllUser = (req, res) => {

    let user = users.filter(user => user.role != "admin");

    console.log(user);
    try {
        res.status(200).json(user);
    } catch (e) {
        console.log(e);

    }
}

exports.register = (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username);
        const usersFile = path.join(__dirname, '../model/users.js');

        if (user) {
            return res.status(401).json({ success: false, message: 'Username already Taken' });
        }
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            username,
            password,
            role: "user"
        };

        users.push(newUser);
        saveUser(users);

        //console.log(users);
        function saveUser(usersArray) {
            const content =
                "const users = " +
                JSON.stringify(usersArray, null, 2) +
                ";\n\nmodule.exports = users;\n";

            fs.writeFileSync(usersFile, content, 'utf-8');


        }

        // console.log(username);

        res.json({ success: true, username: username });
    } catch (e) {
        console.log(e);

    }
}
exports.update = (req, res) => {
    try {
        const { username, password } = req.body;
        const usersFile = path.join(__dirname, '../model/users.js');

        const updateduser = users.map((user) => {

            if (user.username == username) {
                return { ...user, password: password };
            }
            return user;


        });

        saveUser(updateduser);

        //console.log(users);
        function saveUser(usersArray) {
            const content =
                "const users = " +
                JSON.stringify(usersArray, null, 2) +
                ";\n\nmodule.exports = users;\n";

            fs.writeFileSync(usersFile, content, 'utf-8');


        }


        res.json({ success: true, message: "Updated" });
    } catch (e) {
        console.log(e);

    }
}


exports.deleteUser = (req, res) => {
    try {
        const { username } = req.body;
        const usersFile = path.join(__dirname, '../model/users.js');

        const updateduser = users.map((user) => {

            if (user.username == username) {
                return;
            }
            return user;


        });

        saveUser(updateduser);

        function saveUser(usersArray) {
            const content =
                "const users = " +
                JSON.stringify(usersArray, null, 2) +
                ";\n\nmodule.exports = users;\n";

            fs.writeFileSync(usersFile, content, 'utf-8');


        }


        res.json({ success: true, message: "User Deleted" });
    } catch (e) {
        console.log(e);

    }
}



