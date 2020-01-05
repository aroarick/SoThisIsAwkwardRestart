module.exports = {
  postOptOut: function(request, response) {
    let email = request.query.email;

    var mysql = require("mysql");
    var config = require("./db");

    if (email != undefined || email.length > 0) {
      var con = mysql.createConnection(config.dbConfig);

      con.connect(function(err) {
        if (err) {
          response.json({ response: "bad", error: err });
        } else {
          var sql = "INSERT INTO optout (email) VALUES ('" + email + "')";
          con.query(sql, function(err, result, fields) {
            if (err) {
              response.json({ response: "bad", error: err });
            } else {
              response.json({ response: "good" });
            }
          });
        }
      });
    } else {
      response.json({ response: "bad", error: "no email received" });
    }
  }
};
