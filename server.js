var express= require("express");
var bp = require("body-parser");
var path = require("path");

var app =express();
var PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({ extended: true}));
app.use(bp.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });