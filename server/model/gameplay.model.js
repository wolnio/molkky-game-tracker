const { Schema, model } = require("mongoose");

const gameplay = new Schema({
  creator: String,
  players: [
    {
      username: String,
      points: { type: [Number], default: null },
      score: { type: Number, default: null },
    },
  ],
  status: { type: String, default: "RUNNING" },
  created: { type: Date, default: Date.now },
});

module.exports = model("Gameplay", gameplay);
