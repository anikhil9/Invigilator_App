var express=require('express')
var app=express()
app.get('/hello',function(req,res)
{
     res.send("Its get request")
});
app.post('/hello',function(req,res)
{
    var username =req.param('username',null)
    res.send(username)    
     res.send("Its post request")
}
);
app.listen(8081);