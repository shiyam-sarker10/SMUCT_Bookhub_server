const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
applyMiddleware(app)

async function run() {
  try {


  
  } finally {
  }
}
run().catch(console.dir);

app.get("/health", (req, res) => {
    
  res.send("the smuct server is working");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested route is invalid: ${req?.url}`);
  error.status = 404;
  next(error);
});

app.use((error,req,res,next) => {
    res.status(res.error || 500).json({
        message : error.message
    })
})

const main = async () => {

    await connectDB()

    app.listen(port, () => {
    console.log(`This is server is running on port : ${port}`);
    });

}

main()

