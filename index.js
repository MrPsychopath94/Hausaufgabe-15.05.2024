const express = require("express");
const app = express();
const port = 3000;

const hobbys = ["Fahrrad fahren", "Spazieren gehen", "Reisen"];
const einkaufsliste = ["Milch", "Eier", "Brot", "Kaffee"];

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

app.get("/", (req, res) => {
    res.send('Geschafft!!');
  });

app.get("/hobbys", (req, res) => {
  res.json(hobbys);
});

app.get("/einkaufsliste", (req, res) => {
  res.json(einkaufsliste);
});
