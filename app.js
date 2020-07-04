const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main.js");
const errorRoutes = require("./routes/error.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

app.use(mainRoutes);

app.use(errorRoutes);

app.listen(3000);
