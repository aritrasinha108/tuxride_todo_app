const mongoose = require("mongoose");
connectionDB = () => {
  mongoose
    .connect("mongodb+srv://user1:uploadit@cluster1.w0sy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("database connected!!");
    })
    .catch(() => {
      console.log("Failed to connect to database!!");
    });
};

module.exports = connectionDB;