const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs")
const app = express();

const mainRoutes = require("./routes/main.js");
const errorRoutes = require("./routes/error.js");
const viewsPath = path.join(__dirname, './views')
const partialsPath = path.join(__dirname, './views/partials')

hbs.registerPartials(partialsPath)
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(path.join(__dirname, "assets")));

app.use(mainRoutes);

app.use(errorRoutes);

app.listen(3000);
