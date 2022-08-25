const stars = require('../models/stars.model');

function indexStars(req, res) {
   res.send(stars);
}

function postStar(req, res) {
   const newStar = {
      id: stars.length,
      name: req.body.name
   }
   stars.push(newStar);
   res.status(200).json(newStar);
}

function getStar(req, res) {   res
      .status(
         stars[req.params.id] ? 200 : 404
      )
      .json(
         stars[req.params.id] ? stars[req.params.id] : { error: 'Star not found.' }
      );
}

module.exports = {
   postStar,
   indexStars,
   getStar
}