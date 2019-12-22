module.exports = function() {
  this.connection = function() {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "s00thinG",
      database: "stia"
    });

    return con;
  };
};
