var express = require("express"),
    fs = require("fs");

module.exports = function(opts){
  var libraryRouter = express.Router();

  libraryRouter.get("/test", function(req, res){
    res.json({
      "hello": "World"
    });
  });

  return libraryRouter;
}
