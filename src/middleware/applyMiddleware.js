const express = require("express");
const cors = require("cors");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(cors());
};


module.exports = applyMiddleware