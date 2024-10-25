const rateLimit = require('express-rate-limit');


const message = {
    message: 'Too many request, please try again later'
};

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: (req, res) => {
        res.status(409).json(message);
    },
    keyGenerator: (req) => req.body.email || req.password || req.ip
});

module.exports = limiter;