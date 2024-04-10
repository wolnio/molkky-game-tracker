const express = require("express");

const gameplayController = require("../controllers/gameplay-controller");

const router = express.Router();

router.post("/new", gameplayController.newGameplay);

router.get("/all", gameplayController.getAllGameplays);

router.get("/:id", gameplayController.getGameplayById);
router.patch("/players/:id", gameplayController.updatePlayerPoints);

module.exports = router;
