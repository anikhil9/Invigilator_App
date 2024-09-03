var http=require("http");
var dt=require("./mydatetime");
http.createServer(function(req,res)
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Hello World"+"<br>")
res.write('Hello World!' + dt.mydatetime());
res.end();
}).listen(8080);