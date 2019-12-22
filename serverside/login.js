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
          request.session.loggedIn = true;
          request.session.userId = result.insertId;
          response.json({ response: "good", result: result, loggedIn: true });
        }
      });
    });
  },
  postLoginCheck: function(request, response) {
    require("./db.js")();
    var con = connection();
    con.connect(function(err) {
      if (err) throw err;
      // get data
      let username = request.body.username;
      let password = request.body.password;
      var sql =
        "SELECT id_user FROM users WHERE username='" +
        username +
        "' AND password='" +
        password +
        "'";

      con.query(sql, function(err, result) {
        if (err) {
          response.json({ response: "bad", error: err });
        } else {
          if (result.length === 0) {
            request.session.loggedIn = false;
            request.session.userId = null;
          } else {
            request.session.loggedIn = true;
            request.session.userId = result[0].id_user;
          }
          response.json({ response: "good", result: request.session.userId });
        }
      });
    });
  }
};
