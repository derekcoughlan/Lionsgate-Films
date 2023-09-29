const db = require('../model');

const userController = {};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    const text = 'SELECT * FROM users WHERE username=($1) AND password=($2);'
    const values = [username, password];

    db.query(text, values).then(data => {
        res.locals.userid = data.rows[0].user_id;
        return next();
    }).catch(err => {
        console.log('user verification failed')
        return next({
            log: 'userController.verifyUser ERROR: failure to login',
            status: 404,
            message: {
                err: 'userController.verifyUser ERROR: failure to login'
            }
        })
    })
}

module.exports = userController;