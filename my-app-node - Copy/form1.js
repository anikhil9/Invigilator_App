var http=require("http");
var fs=require("fs");
var upper=require("upper-case");
http.createServer(function(req,res)
{
fs.readFile('samptxt1.txt',function(err,data){
res.writeHead(200,{'Content-Type':'text'});
if(data.includes("Hello"))
res.write("c");
else
res.write("s");

//res.write(data);
res.end();
})
}).listen(8081);