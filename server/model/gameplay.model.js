const { Schema, model } = require("mongoose");

const gameplay = new Schema({
  title: String,
  creator: Schema.ObjectId,
  players: [
    {
      username: String,
      points: { type: [[Number]], default: null },
      score: { type: Number, default: null },
      state: {
        type: String,
        enum: ["WIN", "IN_GAME", "LOSE"],
        default: "IN_GAME",
      },
    },
  ],
  status: { type: String, enum: ["RUNNING", "ENDED"], default: "RUNNING" },
  created: { type: Date, default: Date.now },
});

module.exports = model("Gameplay", gameplay);
