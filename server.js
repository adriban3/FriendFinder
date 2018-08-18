var express = require("express");
var bp = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(bp.text());

require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT)
})