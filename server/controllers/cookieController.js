const db = require('../model');
const jwt = require('jsonwebtoken');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    console.log('inside setCookie');
    const token = jwt.sign({id: res.locals.userid}, process.env.ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1h'
    })
    console.log('token: ', token)
    res.cookie('ssid', token, {httpOnly: true});
    res.cookie('id', res.locals.userid)
    return next();
}

cookieController.isLoggedIn = (req, res, next) => {
    console.log('cookie id', req.cookies.ssid)
    jwt.verify(req.cookies.ssid, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err){
            return next({
                    log: 'cookieController.isLoggedIn ERROR: jwt verification failed',
                    status: 404,
                    message: {
                        err: 'cookieController.isLoggedIn ERROR: jwt verification failed'
                    }
                })
        }else{
            console.log('jwt cookie is verified')
            return next();
        }
    })
}


module.exports = cookieController;