var express = require('express');
var app = express();
var fs=require('fs');
var upper=require("upper-case");
var validator=require("validator");
app.use(express.urlencoded());
app.post('/', function (req, res) {
        
        var a= req.param('a', null)
      if(validator.isAlpha(a))
    {
        res.send(a);
    }
    else
    {
        res.send('not valid');
    }
    
    });


app.listen(9111);





