var mysql = require('mysql');
var express = require('express');
var {Link} =require( 'react-router-dom');
var app = express();
app.use(express.urlencoded());
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "jimmy1999",
    database : "project",
    insecureAuth : true
  });
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
});

connection.query('SELECT * from login', function (error, results, fields) {
  if (error) throw error;
  var length=results.length

  for(i=0;i<length;i++)
  console.log('\nThe solution is: ', results[i].username , results[i].password);
  app.get('/', function (req, res) {
    var username= req.param('username', null)
    var password= req.param('password', null)
    var type= req.param('type', null)
    var flag=0;
    for(i=0;i<length;i++)
    {
    if(username==results[i].username)
    {
       if(password==results[i].password)
         {
            if(type==results[i].type)
            {
           flag=1;
             }
          }
     }
    }
    if(flag==1)
    req.redirect(405, 'https://www.google.co.in/');
      else
    res.send('not valid');
});
});
app.listen(9111);
connection.end();

