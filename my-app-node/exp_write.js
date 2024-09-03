var express = require('express');
var app = express();
var fs=require('fs');
app.use(express.urlencoded());
app.post('/', function (req, res) {
    var a= req.param('username', null)
        fs.appendFile('samptxt1.txt',a,function(err){
            if(err) throw err;
            res.send("saved");
            res.end();
            });

        });
app.listen(9000);





