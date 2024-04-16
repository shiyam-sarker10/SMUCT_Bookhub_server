const express = require("express");
const cors = require("cors");
const app = express();
const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
};


module.exports = applyMiddleware