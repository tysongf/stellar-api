const express = require('express');

const starsRouter = express.Router();
const starsController = require('../controllers/stars.controller');

starsRouter.post('/', starsController.postStar);
starsRouter.get('/', starsController.indexStars);
starsRouter.get('/:star_id', starsController.getStar);

module.exports = starsRouter;