const Gameplay = require("../model/gameplay.model");

const newGameplay = async (req, res, next) => {
  const { players, title } = req.body;

  const createdGameplay = new Gameplay({
    creator: req.userData.userId,
    players: players,
    title: title,
  });

  try {
    await createdGameplay.save();
  } catch (err) {
    const error = new Error("Creating gameplay failed. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  res.status(200).json({
    gameplayId: createdGameplay.id,
  });
};

const getAllGameplays = async (req, res, next) => {
  let existingGameplays;
  try {
    existingGameplays = await Gameplay.find({
      creator: req.userData.userId,
    }).select("players status created title");
  } catch (err) {
    const error = new Error("Fetching all gameplays failed. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  res
    .status(200)
    .json(existingGameplays.map((gameplay) => gameplay.toObject()));
};

const getGameplayById = async (req, res, next) => {
  const { id } = req.params;

  let existingGameplay;
  try {
    existingGameplay = await Gameplay.find({ _id: id }).select(
      "players status created title"
    );
  } catch (err) {
    const error = new Error(
      "Fetching gameplay by ID failed. Something`s wrong"
    );
    error.statusCode = 500;
    return next(error);
  }

  res.status(200).json(existingGameplay.map((gameplay) => gameplay.toObject()));
};

const updatePlayerPoints = async (req, res, next) => {
  const { id: playerId } = req.params;
  const changes = req.body;
  const { state } = changes;
  changes._id = playerId;

  console.log("STATE", state);

  let existingPlayer;
  let gameplayStatus = "RUNNING";
  try {
    if (state === "WIN") {
      gameplayStatus = "ENDED";
    }
    console.log("STATUS", gameplayStatus);
    existingPlayer = await Gameplay.findOneAndUpdate(
      { "players._id": playerId },
      { $set: { "players.$": changes, status: gameplayStatus } },
      { new: true }
    );
  } catch (err) {
    const error = new Error(
      "Fetching gameplay by ID failed. Something`s wrong"
    );
    error.statusCode = 500;
    return next(error);
  }

  res.status(200).json(existingPlayer);
};

const updateGameplayStatus = async (req, res, next) => {
  const {} = req.params;
};

exports.newGameplay = newGameplay;
exports.getAllGameplays = getAllGameplays;
exports.getGameplayById = getGameplayById;
exports.updatePlayerPoints = updatePlayerPoints;
