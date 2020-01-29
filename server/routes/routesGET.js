// Setup
const express = require('express');
const routesGET = express.Router();

const modelQuery = require('../../db/modelQuery.js');

routesGET.get('/comments', (req, res) => {
  modelQuery.getAllComments((docs) => {
    res.send(docs);
  })
});

module.exports = routesGET;