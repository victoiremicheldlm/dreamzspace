const express = require("express");

const router = express.Router();

const AuthControllers = require("../controllers/AuthControllers");

router.post("/register", AuthControllers.register);

module.exports = router;
