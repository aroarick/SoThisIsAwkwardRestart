const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const message = require("./serverside/message");
const login = require("./serverside/login");
const suggestion = require("./serverside/suggestion");
const path = require("path");

const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/api/v1/message", (req, res) => {
  message.postMessage(req, res);
});

//create login
app.post("/api/v1/login", (req, res) => {
  login.postLogin(req, res);
});

// do login
app.get("/api/v1/login", (req, res) => {
  login.getLogin(req, res);
});

// do logout
app.get("/api/v1/logout", (req, res) => {});

// create suggestion
app.post("/api/v1/suggestion", (req, res) => {
  suggestion.postSuggestion(req, res);
});

app.listen(process.env.PORT || port, () => {
  console.log("server is listening on port " + port);
});
