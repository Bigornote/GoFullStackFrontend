const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Requête Reçu");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Votre requête à bien été reçue" });
  next();
});

app.use((req, res) => {
  console.log("la requête a été envoyé avec succes");
});

module.exports = app;
