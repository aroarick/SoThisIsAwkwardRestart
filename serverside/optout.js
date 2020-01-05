module.exports = {
  postOptOut: function(request, response) {
    let email = request.query.email;

    var mysql = require("mysql");

    console.log("Howdy");
    if (email != undefined || email.length > 0) {
      var con = mysql.createConnection({
        host: "db.sothisisawkward.com",
        user: "stiadbuser",
        password: "s00thinG",
        database: "sothisisawkward",
        debug: true
      });

      con.connect(function(err) {
        if (err) {
          //   throw err;
          response.json({ response: "bad", error: err });
        } else {
          var sql = "INSERT INTO optout (email) VALUES ('" + email + "')";
          con.query(sql, function(err, result, fields) {
            if (err) {
              //   throw err;
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

    console.log(email);
  }
};
