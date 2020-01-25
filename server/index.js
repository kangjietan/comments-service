// Dependencies
const path = require('path');
const express = require('express');
const app = express();

const morgan = require('morgan');

// Middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(morgan('dev'));

console.log(__dirname);

// Initialisation
const port = 3000;
app.listen(port, () => { console.log(`listening on http://localhost:${port}`); });