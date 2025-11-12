const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const USER = {
    username: "miten",
    password: "12345"
};

const SECRET_KEY = "mySecretKey123";

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    if (username === USER.username && password === USER.password) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

        res.json({
            status: "success",
            message: "Login successful",
            token
        });
    } else {
        res.status(401).json({
            status: "error",
            message: "Invalid username or password"
        });
    }
});

app.get('/profile', verifyToken, (req, res) => {
    res.json({
        status: "success",
        message: "Protected profile data",
        user: req.user
    });
});
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: "Token required" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" });
        req.user = user;
        next();
    });
}

app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});
