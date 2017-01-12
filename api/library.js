var express = require("express"),
    fs = require("fs"),
    Artist = require("./model/artist");

var randomColor = function(){
  var randomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var r = randomInt(0, 255);
  var g = randomInt(0, 255);
  var b = randomInt(0, 255);

  return (r << 16) |
         (g << 8) |
         b;
};

module.exports = function(opts){
  var libraryRouter = express.Router();

  libraryRouter.get("/test", function(req, res){
    var data = [];
    for(var i = 0; i <= 50; i++) data.push(new Artist("Test" + i, randomColor()));
    res.json(data);
  });

  return libraryRouter;
}
