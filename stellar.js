const express = require('express');

const API_PORT = 2000;
const api = express();

const stars = [
   {id: 1, name: "Sol"},
   {id: 2, name: "Alpha Centauri"}
];

api.get('/stars', (req, res) => {
   res.json(stars);
});

api.listen(API_PORT, () => {
   console.log(`Stellar API listening on ${API_PORT}...`);
 });