// Express + Next JS server combination - server.js
const express = require("express");
const next = require("next");
const { createHash } = await import("node:crypto");
const hash = createHash("sha256");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.get("/api/myapi", (req, res) => {
  res.send("<h1>This is an API route :)</h1>");
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

server.post("/hashemail", function (req, res) {
  console.log(req.body.email);
  if (!checkEmail(req.body.email)) {
    res.status(412).json({ error: "email not satisfactory" });
  } else {
    res.json({
      message: "Success",
      email: req.body.email,
      hash: hashMe(req.body.email),
    });
  }
});

function checkEmail(mail) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(mail);
}

function hashMe(mail) {
  return hash.update(mail).copy().digest("base64");
}