const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
