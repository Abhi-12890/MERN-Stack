const express = require("express");
const Router = express.Router()

Router.get("/", (req,res) => {
  res.status(200).send("Welcome to my Home Page.");
});
Router.route("/resistation", (req,res) => {
  res.status(200).send("Welcome to my Resistaion Page.");
});



module.exports = Router;