const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://wolnioun:mZJTKrUhtt86pIlx@cluster0.jvkhb.mongodb.net/?retryWrites=true&w=majority";

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
