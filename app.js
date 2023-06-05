const express = require("express");
const app = express();
const port = 3000;

const datos = { message: "Facu te amo", name: "Jorge" };

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.redirect("/datos");
});

app.get("/datos", (req, res) => {
  res.json(datos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
