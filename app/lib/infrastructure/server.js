// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
const { PandadocRouter } = require('./webserver/routes/pandadoc');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pandadoc', PandadocRouter);

module.exports = { app };
