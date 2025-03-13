// Express + Next JS server combination - server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.get("/api/myapi", (req, res) => {
  res.json({ msg: "This is a response returned by your express application using Express.js server" });
});

server.get("*", (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  // Start listening to the Express.js Server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Express Server running on http://localhost:3000");
  });
});