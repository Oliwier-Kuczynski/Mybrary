const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorsRouter = require("./routes/authors");
const mongoose = require("mongoose");
const { response } = require("express");

app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://testing:Test1234@cluster0.adkv2.mongodb.net/database?retryWrites=true&w=majority"
);

app.use("/", indexRouter);
app.use("/authors", authorsRouter);

app.listen(process.env.PORT || 3000);
