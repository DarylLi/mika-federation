const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8100;
var http = require("http");
const cors = require("cors");

app.use(cors());
// request body解析
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PATCH, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, PATCH, OPTIONS, PUT, DELETE");
  res.append("Cross-Origin-Opener-Policy", "cross-origin");
  res.append("cross-origin-resource-policy", "cross-origin");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app-host/dist/index.html");
});
app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/app-host/dist/${req.url}`);
});
var httpServer = http.createServer(app);
console.log(`server listening on port ${port}`);
httpServer.listen(port);
