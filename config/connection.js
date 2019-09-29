// setting  up MySql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "3lPoderoso!",
    database: "burgers_db"
  });

  if(process.env.NODE_ENV === "production"){
    connection = mysql.createConnection({
        host: process.env.JAWSDB_HOST,
        port: process.env.JAWSDB_PORT,
        user: process.env.JAWSDB_USER,
        password: process.env.JAWSDB_PWD,
        database: process.env.JAWSDB_DB
    });
}
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  