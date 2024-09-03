var http=require("http");
var url=require("url");
//var upper=require("upper-case");
http.createServer(function(req,res)
{
res.writeHead(200,{'Content-Type':'text'});
//res.write("Hello World"+req.url);
var q=url.parse(req.url,true).query;
//var txt =q.username +" \t "+ q.password;
var txt =(q.username) +" \t "+ (q.password);
res.write('\nText Query \t'+ txt);
if(q.username==='hi'&& q.password==='bye')
{
    res.write("Login success");
}
else
{
    res.write("Login failure");
}
res.end();
}).listen(8080);