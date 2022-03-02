const express = require("express");
const app = express();
app.use(express.json());
const product = require("./router/productRout");
const user = require("./router/userRout");
const ErrorHandler = require("./util/errorHandler");
app.use("/api", product);
app.use("/api", user);
const errorHandler = require("./util/errorHandler");

//app.use(errorHandler)
module.exports = app;
