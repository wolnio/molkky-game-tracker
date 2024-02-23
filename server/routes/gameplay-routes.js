const express = require("express");

const gameplayController = require("../controllers/gameplay-controller");

const router = express.Router();

router.post("/new", gameplayController.newGameplay);

router.get("/all", gameplayController.getAllGameplays);

module.exports = router;
