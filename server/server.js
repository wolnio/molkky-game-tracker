require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jvkhb.mongodb.net/?retryWrites=true&w=majority`;

const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users-routes");

const mongoose = require("mongoose");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

mongoose
  .connect(uri)
  .then((client) => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => console.log(err));
