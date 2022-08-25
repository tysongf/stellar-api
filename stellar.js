const express = require('express');

const starsRouter = require('./routers/stars.router');
const starsController = require('./controllers/stars.controller');

const api = express();
const API_PORT = 2000;

//logging middleware
api.use((req, res, next) => {
   const start_time = Date.now();
   next();
   const delta_time = Date.now() - start_time;
   console.log(`Request: ${req.method} ${req.url} : ${delta_time}ms`);
});

api.use(express.json());         //parse json requests
api.use('/stars', starsRouter);  //mount the router

api.listen(API_PORT, () => {
   console.log(`Stellar API listening on ${API_PORT}...`);
 });