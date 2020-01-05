module.exports = {
  postMessage: function(request, response) {
    const sgMail = require("@sendgrid/mail");
    var config = require("./db");
    var mysql = require("mysql");

    const key = process.env.SENDGRID_API_KEY;

    sgMail.setApiKey(key);

    const msg = {
      to: request.body.emailAddress,
      from: "noreply@sothisisawkward.com",
      subject: request.body.subject,
      text: request.body.textMessage,
      html: request.body.htmlMessage
    };

    let allGood = false;

    var con = mysql.createConnection(config.dbConfig);
    con.connect(function(err) {
      if (err) {
        response.json({ response: "bad", error: err });
      } else {
        var sql =
          "SELECT COUNT(*) AS count FROM `optout` WHERE email='" +
          request.body.emailAddress +
          "'";
        con.query(sql, function(err, result, fields) {
          if (err) {
            response.json({ response: "bad", error: err });
          } else {
            console.log(result);
            if (result[0].count == 0) {
              allGood = true;
            }

            if (allGood) {
              sgMail
                .send(msg)
                .then(function(value) {
                  response.json({ response: "good" });
                })
                .catch(function(error) {
                  response.json({ response: "bad", error: error });
                  console.log(key);
                });
            } else {
              response.json({ response: "bad", error: "This user opted out" });
            }
          }
        });
      }
    });
  }
};
