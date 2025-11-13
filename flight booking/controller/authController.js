const users = require('../model/users');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
exports.login = (req, res) => {

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

    res.json({ success: true, token, username: user.username });
}







