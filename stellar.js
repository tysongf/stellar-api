const express = require('express');

const API_PORT = 2000;
const api = express();

const stars = [
   {
      id: 0,
      name: 'Sol',
      planets: [
         {id: 0, name: 'Mercury'},
         {id: 1, name: 'Venus'},
         {id: 2, name: 'Earth'},
         {id: 3, name: 'Mars'},
         {id: 4, name: 'Jupiter'},
         {id: 5, name: 'Saturn'},
         {id: 6, name: 'Uranus'},
         {id: 7, name: 'Neptune'}
      ]
   },
   {
      id: 1, name: 'Alpha Centauri', planets: []
   }
];

api.get('/stars', (req, res) => {
   res.json(stars);
});

api.get('/stars/:id', (req, res) => {
   res
      .status(
         stars[req.params.id] ? 200 : 404
      )
      .json(
         stars[req.params.id] ? stars[req.params.id] : { error: 'Star not found.' }
      );
});

api.listen(API_PORT, () => {
   console.log(`Stellar API listening on ${API_PORT}...`);
 });