module.exports = {
  postLogin: function(request, response) {
    require("./db.js")();
    var con = connection();

    con.connect(function(err) {
      if (err) throw err;

      // get data
      let username = request.body.username;
      let password = request.body.password;
      var sql =
        "INSERT INTO users (username, password) VALUES ('" +
        username +
        "', '" +
        password +
        "');";
      con.query(sql, function(err, result) {
        if (err) {
          response.json({ response: "bad", error: err });
        } else {
          response.json({ response: "good", result: result });
        }
      });
    });
  },
  getLogin: function(request, response) {
    require("./db.js")();
    var con = connection();

    con.connect(function(err) {
      if (err) throw err;
      // get data
      let username = request.body.username;
      let password = request.body.password;
      var sql =
        "SELECT COUNT(*) as count FROM users WHERE username='" +
        username +
        "' AND password='" +
        password +
        "'";

      con.query(sql, function(err, result) {
        if (err) {
          response.json({ response: "bad", error: err });
        } else {
          response.json({ response: "good", result: result });
        }
      });
    });
  }
};
