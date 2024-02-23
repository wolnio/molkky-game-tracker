const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed!");
    }
    console.log("AUTH MIDDLEWARE");
    const decodedToken = jwt.verify(token, "secretAndPrivateString");
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new Error("Authentication failed.");
    error.statusCode = 401;
    return next(error);
  }
};
