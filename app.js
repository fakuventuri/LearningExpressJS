const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

// app.get("/", (req, res) => {
//  res.sendFile(__dirname + "/index.html");
// });

// app.get("/:username", (req, res) => {
//  res.send(`Hola ${req.params.username}`);
// });

// app.post("/", (req, res) => {
// console.log(req.body.name);
// res.redirect("/" + req.body.name);
// });

app.get("/Facu/Capo", (req, res) => {
  const numero1 = parseInt(req.query.numero1);
  const numero2 = parseInt(req.query.numero2);
  console.log(numero1);
  console.log(numero2);
  console.log(`El resultado de las queries es: ${numero1 + numero2}`);
  res.send("Hola Facu");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
