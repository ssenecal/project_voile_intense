import express from "express";
const app = express();
const port = 3000;
const { createHash } = await import("node:crypto");
const hash = createHash("sha256");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World !</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me.</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.post("/hashemail", function (req, res) {
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
