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
    connection = mysql.createConnection(process.env.JAWSDB_URL);
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
  