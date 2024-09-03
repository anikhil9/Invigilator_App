var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : "database-3.cghon4yqvlu7.us-east-1.rds.amazonaws.com",
    user     : "swaroop",
    password : "jimmy1999",
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
});

connection.end();