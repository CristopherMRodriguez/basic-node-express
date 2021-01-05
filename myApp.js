var express = require('express');
var app = express();
require("dotenv").config();

app.use((req, res, next)=>{
  var string = req.method + " " + req.path + " - " + req.ip;
  next();
})

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function(req, res) {
  let message = "Hello json"
  if (process.env.MESSAGE_STYLE == "uppercase"){
    return res.json({"message": message.toUpperCase()}) 
  }
    else return res.json({"message": message});
  })

app.use(express.static(__dirname + "/public"));



































 module.exports = app;
