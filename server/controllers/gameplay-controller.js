const Gameplay = require("../model/gameplay.model");

const newGameplay = async (req, res, next) => {
  const { players } = req.body;
  console.log("NEW GAMEPLAY", req);

  const createdGameplay = new Gameplay({
    creator: req.userData.userId,
    players: players,
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
    existingGameplays = await Gameplay.find({ creator: req.userData.userId });
  } catch (err) {
    const error = new Error("Fetching all gameplays failed. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  res
    .status(200)
    .json(
      existingGameplays.map((gameplay) => gameplay.toObject({ getters: true }))
    );
};

exports.newGameplay = newGameplay;
exports.getAllGameplays = getAllGameplays;
