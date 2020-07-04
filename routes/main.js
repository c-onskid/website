const path = require("path");
const express = require("express");

const rootDir = require("../util/path")

const router = express.Router();

router.get("/about", (req, res, next) => {
  res.send("<h1> About Page </h1>");
});

router.get("/contact", (req, res, next) => {
  res.send("<h1> Contact Page </h1>");
});

router.get("/blogs", (req, res, next) => {
  res.send("<h1> Blog Page </h1>");
});

router.get("/home", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views", "home.html"));
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
