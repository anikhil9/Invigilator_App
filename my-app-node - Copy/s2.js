var http = require('http');
var url = require('url');
var dt= require('./mydatetime');
var upper=require('upper-case');
var fs=require('fs');
http.createServer(function (req, res) {
    q=url.parse(req.url,true).query;
   fs.appendFile('samptxt1.txt',q.username,function(error){
if(error)
throw error;
res.write('saved');
  res.end();
});
}).listen(8083);