var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.json(parse(req.headers));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port "+ process.env.PORT + "!"');
});

var parse = function(h) {
  var data = {};
  data.ip = h["x-forwarded-for"];
  data.language = h["accept-language"].slice(0, h["accept-language"].indexOf(";"));
  data.software = h["user-agent"].slice(h["user-agent"].indexOf("(") + 1, h["user-agent"].indexOf(")"));
  return data;
};