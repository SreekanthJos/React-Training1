var express = require('express');
var app=express();
var fs = require('fs');

var server=app.listen(8081,function(){
});

app.get('/movies', function (req, res) {
  // req.setEncoding("access-control-allow-origin","*");
   fs.readFile(__dirname + "/" + "moviesData.json", 'utf8', function (err, data) {
      console.log( data );
            res.set("Access-Control-Allow-Origin","*");
      res.end( data );
   });
})