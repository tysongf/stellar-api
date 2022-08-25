const express = require('express');

const timerMiddleware = require('./middleware/timer.middleware');
const starsRouter = require('./routers/stars.router');

const api = express();
const API_PORT = 2000;

api.use(timerMiddleware);        // log API request and response time
api.use(express.json());         // parse json requests
api.use('/stars', starsRouter);  // mount the router

api.listen(API_PORT, () => console.log(`Stellar API listening on ${API_PORT}...`));
