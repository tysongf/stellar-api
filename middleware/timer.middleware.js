function timerMiddleware (req, res, next) {
   const start_time = Date.now();
   next();
   const delta_time = Date.now() - start_time;
   console.log(`Request: ${req.method} ${req.url} : ${delta_time}ms`);
};

module.exports = timerMiddleware;
