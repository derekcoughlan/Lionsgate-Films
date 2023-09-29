const db = require('../model');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.userid, {httpOnly: true})
    return next();
}

cookieController.isLoggedIn = (req, res, next) => {
    
}


module.exports = cookieController;