const express = require("express");

const usersController = require("../controllers/users-controller");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", usersController.getUsers);

router.post("/signup", usersController.signup);

router.post("/signin", usersController.signin);

router.use(checkAuth);

module.exports = router;
