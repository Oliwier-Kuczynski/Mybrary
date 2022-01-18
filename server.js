const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");
const { response } = require("express");

app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://testing:Test1234@cluster0.adkv2.mongodb.net/database?retryWrites=true&w=majority"
);

app.use(indexRouter);

app.listen(process.env.PORT || 3000);
