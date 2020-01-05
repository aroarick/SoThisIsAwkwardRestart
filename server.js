const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const message = require("./serverside/message");
const optout = require("./serverside/optout");
const path = require("path");
const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.post("/api/v1/message", (req, res) => {
  message.postMessage(req, res);
});

app.get("/api/v1/optout", (req, res) => {
  optout.postOptOut(req, res);
});

app.listen(process.env.PORT || port, () => {
  console.log("server is listening on port " + port);
});
