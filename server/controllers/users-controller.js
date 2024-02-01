const User = require("../model/user.model");

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
  const { username, email, password } = req.body;
  console.log("SIGNUP RUN");

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log("signup:", err);
    return next(err);
  }

  if (existingUser) {
    console.error("User already exists");
    return next;
  }

  const createdUser = new User({
    username: username,
    email: email,
    password: password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.error("created:", err);
    return next(err);
  }

  res.status(200).json({ user: createdUser.toObject({ getters: true }) });
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log("Signin:", err);
    return next(err);
  }

  if (!existingUser || existingUser.password !== password) {
    console.log("SIGNIN not success!");
    return next();
  }

  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.signin = signin;
