module.exports = {
  postMessage: function(request, response) {
    const sgMail = require("@sendgrid/mail");
    const key = process.env.SENDGRID_API_KEY;

    sgMail.setApiKey(key);

    const msg = {
      to: request.body.emailAddress,
      from: "noreply@sothisisawkward.com",
      subject: request.body.subject,
      text: request.body.textMessage,
      html: request.body.htmlMessage
    };

    sgMail
      .send(msg)
      .then(function(value) {
        response.json({ response: "good" });
      })
      .catch(function(error) {
        response.json({ response: "bad", error: error });
        console.log(key);
      });
  }
};
