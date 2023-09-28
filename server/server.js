const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();


const userController = require('./controllers/userController')

app.use(express.json());

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

app.get('/home/', userController.getAllFilms, (req, res) => {
   res.status(200).json(res.locals.allFilms);
})

app.post('/home/addSaved', userController.addSavedFilms, (req, res) => {
    res.sendStatus(200)
})

app.delete('/home/removeSaved', userController.removeSavedFilms, (req, res) => {
    res.sendStatus(200)
})

app.get('/home/savedFilms', userController.getSavedFilms, (req, res) => {
   res.status(200).json(res.locals.savedFilms);
})



//Page Not Found
app.use('*', (req, res) => {
    res.status(404).send('Not Founds');
})

//Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'unknown error handler caught in middleware',
        status: 400,
        message: {err: 'An error occureds'},
  }
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message); 
})

app.listen(3000, () => {console.log(`Listening on port 3000...`)});

module.exports = app;
