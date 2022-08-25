function starsMiddleware(req, res, next) {
   console.log(req.ip, "Accessing Stars");
   next();
}

module.exports = starsMiddleware;
