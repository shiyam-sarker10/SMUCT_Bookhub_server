const mongoose = require("mongoose");
const connectDB = async () => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.obcasl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  mongoose.connect(uri, { dbName: "SMUCT_db" });
  console.log("Connected successfully");
};
module.exports = connectDB;
