const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: String,
  password: String,
});

module.exports = model("User", userSchema);
