// const routes = require ('express').Router();

// routes.get('/', (req, res) => {
//     res.send('Olongo Wonodi')
//   })
//   module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;
  // install package to not restart server => npm i --save-dev nodemon