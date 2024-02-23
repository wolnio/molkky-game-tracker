const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    console.log("GET users:", err);
    return next(err);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;
  console.log("SIGNUP RUN");

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new Error("Signup fail. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  if (existingUser) {
    const error = new Error("User already exists.");
    error.statusCode = 422;
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new Error("Hashing problem. Please try again.");
    error.statusCode = 500;
    return next(error);
  }

  const createdUser = new User({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new Error("Creating user failed. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, username: createdUser.username },
      "secretAndPrivateString",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Signup fail. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  res.status(200).json({
    userId: createdUser.id,
    username: createdUser.username,
    token: token,
  });
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("SIGN IN RUN");

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log("Signin:", err);
    return next(err);
  }

  if (!existingUser) {
    console.log("SIGNIN not success!");
    return next();
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new Error("Could not log you in, check your credentials.");
    error.statusCode = 500;
    return next(error);
  }

  if (!isValidPassword) {
    const error = new Error("Invalid credentials.");
    error.statusCode = 401;
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, username: existingUser.username },
      "secretAndPrivateString",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Login fail. Something`s wrong");
    error.statusCode = 500;
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    username: existingUser.username,
    token: token,
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.signin = signin;
