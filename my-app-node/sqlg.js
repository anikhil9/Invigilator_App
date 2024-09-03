var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.urlencoded());
var connection = mysql.createConnection({
    host     : "35.193.83.46",
    user     : "root",
    password : "swaroop",
    port     : "3306",
    database : "SampleDB"
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
  app.post('/', function (req, res) {
    var username= req.param('username', null)
    var password= req.param('password', null)
    var flag=0;
    for(i=0;i<length;i++)
    {
    if(username==results[i].username)
    {
       if(password==results[i].password)
         {
        flag=1;
          }
     }
    }
    if(flag==1)
    res.send('valid');
    else
    res.send('not valid');
});
});
app.listen(8111);
connection.end();

