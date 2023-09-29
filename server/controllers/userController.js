const db = require('../model');

const userController = {};

userController.getUser = (req, res, next) => {
    const { user, password } = req.body;
    const text = 'SELECT * FROM users WHERE username=($1) AND password=($2)'
    const values = [user, password];

    db.query(text, values).then(data => {
        console.log('data returned from server: ', data)
        res.locals.userid = data;
        return next();
    }).catch(err => {
        console.log('user verification failed')
        return res.redirect('/login')
    })
}

module.exports = userController;