const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).send('enter json data here')
})
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})

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
