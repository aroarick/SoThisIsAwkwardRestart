module.exports = {
  postSuggestion: function(request, response) {
    require("./db.js")();
    var con = connection();

    con.connect(function(err) {
      if (err) throw err;

      if (request.session.loggedIn) {
        let userid = request.session.userId;
        let suggestion = request.body.issue;
        let category = request.body.category;

        // get data
        var sql =
          "INSERT INTO suggestions (user_id, suggestion, category) VALUES ('" +
          userid +
          "', '" +
          suggestion +
          "', '" +
          category +
          "');";
        con.query(sql, function(err, result) {
          if (err) {
            response.json({ response: "bad", error: err });
          } else {
            response.json({ response: "good", result: result });
          }
        });
      } else {
        response.json({ response: "bad", error: "Not logged in" });
      }
    });
  }
};
