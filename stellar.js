const express = require('express');
const starsController = require('./controllers/stars.controller');
const API_PORT = 2000;
const api = express();

//logging middleware
api.use((req, res, next) => {
   const start_time = Date.now();
   next();
   const delta_time = Date.now() - start_time;
   console.log(`Request: ${req.method} ${req.url} : ${delta_time}ms`);
});

api.use(express.json());

api.post('/stars', starsController.postStar);
api.get('/stars', starsController.indexStars);
api.get('/stars/:id', starsController.getStar);

api.listen(API_PORT, () => {
   console.log(`Stellar API listening on ${API_PORT}...`);
 });