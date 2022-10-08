var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var os = require("os");

app.get("/", (req, res) => {
  var osname = os.hostname();
  var message = `Running on ${osname}`;
  res.send(message);
  console.info(message);
});

var server = app.listen(port, function (req, res) {
  console.log("Catch the action at http://localhost:" + port);
});
