// Setup
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(morgan('dev'));

// Initialisation
const port = 3000;
app.listen(port, () => { console.log(`listening on http://localhost:${port}`); });