var http=require("http");
var fs=require("fs");
var upper=require("upper-case");
http.createServer(function(req)
{
fs.appendFile('samptxt1.txt',"hello Sw \t",function(err){
if(err) throw err;
res.write("saved");
res.end();
})
}).listen(5000);