const express = require('express');
const starsMiddleware = require('../middleware/stars.middleware');

const starsRouter = express.Router();
const starsController = require('../controllers/stars.controller');

starsRouter.use(starsMiddleware);
starsRouter.post('/', starsController.postStar);
starsRouter.get('/', starsController.indexStars);
starsRouter.get('/:star_id', starsController.getStar);

module.exports = starsRouter;