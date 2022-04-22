const routes = require ('express').Router();

routes.get('/', (req, res) => {
    res.send('Olongo Wonodi')
  })
  module.exports = routes;


  // install package to not restart server => npm i --save-dev nodemon