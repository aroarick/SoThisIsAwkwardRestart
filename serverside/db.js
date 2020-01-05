module.exports = function() {
  this.connection = function() {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: "db.sothisisawkward.com",
      user: "stiadbuser",
      password: "s00thinG",
      database: "sothisisawkward"
    });

    return con;
  };
};
