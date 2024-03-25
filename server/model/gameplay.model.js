const { Schema, model } = require("mongoose");

const gameplay = new Schema({
  title: String,
  creator: Schema.ObjectId,
  players: [
    {
      username: String,
      points: { type: [[Number]], default: null },
      score: { type: Number, default: null },
      loss: { type: Boolean, default: false },
    },
  ],
  status: { type: String, default: "RUNNING" },
  created: { type: Date, default: Date.now },
});

module.exports = model("Gameplay", gameplay);
