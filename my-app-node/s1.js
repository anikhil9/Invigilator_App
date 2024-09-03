var http = require('http');
var url = require('url');
var dt= require('./mydatetime');
var upper=require('upper-case');
var fs=require('fs');
http.createServer(function (req, res) {
   fs.readFile('samptxt1.txt',function(error,data){
    res.writeHead(200,{'Content-Type':'text/html'}) ;
 //  res.write(upper(data));
   var q=url.parse(req.url,true).query;
   var txt=q.username+"\t"+q.password;
   //res.write('\n Text Entered \t '+txt);
if(q.username.match(/^[a-zA-Z]+$/))
res.write('\n login success\t ');
else
res.write('\n login fail\t ');
if(q.selection==='CEO')
res.write('\n HEllo\t ');
  // res.write('\n hello'+dt.mydatetime());
  /* if(data.includes('hello'))
   res.write('\n U are correct\t ');s
   else
   res.write('\n U are wrong\t ');  */
  res.end();
});
}).listen(8088);