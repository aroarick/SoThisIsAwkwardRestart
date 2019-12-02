module.exports = {
  postMessage: function(request, response) {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(
      "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"
    );

    const msg = {
      to: request.body.emailAddress,
      from: "noreply@sothisisawkward.com",
      subject: request.body.subject,
      text: request.body.textMessage,
      html: request.body.htmlMessage
    };

    sgMail.send(msg);
    response.json({ response: "good" });
  }
};
