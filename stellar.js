const express = require('express');
const path = require('path');

const timerMiddleware = require('./middleware/timer.middleware');
const starsRouter = require('./routers/stars.router');

const app = express();
const SERVER_PORT = 2000;

app.use(timerMiddleware); // log http requests and response times

//bootstrap handlebars template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//mount the public folder to the root directory
app.use('/', express.static(path.join(__dirname, 'public')));

//render the index template on the root url
app.get('/', (req, res) => {
   res.render('index', { title: 'Exoplex - Exoplanetary Explorer', header1: 'Exoplanet Explorer'})
});

//API bootstrapping
app.use(express.json());         // parse json request body (POST)
app.use('/stars', starsRouter);  // mounting a router

//Listen for http requests
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}...`));
