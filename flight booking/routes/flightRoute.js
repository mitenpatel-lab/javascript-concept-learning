const express = require('express');
const router = express.Router();
const flightController = require('../controller/flightController');
const Auth = require('../middleware/verifyToken');


router.get("/", Auth, flightController.getAllFlights);



module.exports = router;