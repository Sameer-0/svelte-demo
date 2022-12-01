const express = require("express");
const router = express.Router();
const registerController = require('../controllers/Register.Controller')


router.post('/register', registerController.registerUser);

module.exports = router