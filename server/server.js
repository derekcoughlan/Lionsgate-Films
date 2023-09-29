const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const dataController = require('./controllers/dataController');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');


app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production'){
    console.log('got in production')
    //statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build/')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
    console.log('reached html')
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    })
}

app.post('/home/addSaved', dataController.addSavedFilms, (req, res) => {
    res.sendStatus(200)
})

app.delete('/home/removeSaved', dataController.removeSavedFilms, (req, res) => {
    res.sendStatus(200)
})

app.get('/home/savedFilms', dataController.getSavedFilms, (req, res) => {
   res.status(200).json(res.locals.savedFilms);
})

app.post('/home/loginuser', userController.verifyUser, cookieController.setCookie, (req, res) => {
    res.sendStatus(200);
})

app.get('/home/', dataController.getAllFilms, (req, res) => {
    res.status(200).json(res.locals.allFilms);
 })

//Page Not Found
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})

//Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'unknown error handler caught in middleware',
        status: 400,
        message: {err: 'An error occured'},
  }
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message); 
})

app.listen(3000, () => {console.log(`Listening on port 3000...`)});

module.exports = app;
