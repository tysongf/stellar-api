const stars = require('../models/stars.model');
const path = require('path');

function indexStars(req, res) {
   res.send(stars);
}

function postStar(req, res) {
   if(!req.body.name) {
      return res.status(400).json({error: "Missing 'name' property."});
   }

   const newStar = {
      id: stars.length,
      name: req.body.name
   }
   stars.push(newStar);
   res.status(200).json(newStar);
}

function getStar(req, res) {
   res
      .status(
         stars[req.params.star_id] ? 200 : 404
      )
      .json(
         stars[req.params.star_id] ? stars[req.params.star_id] : { error: 'Star not found.' }
      );
}

function getStarImage(req, res) {
   res.sendFile(path.join(__dirname, '..', 'public', 'images', 'star.png'));
}

module.exports = {
   postStar,
   indexStars,
   getStar,
   getStarImage
}
