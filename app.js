const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/:username", (req, res) => {
  res.send(`Hola ${req.params.username}`);
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.redirect("/" + req.body.name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
