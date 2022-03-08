// @ts-check

const express = require('express');
const { CallbackHandler } = require('../controllers/Pandadoc/CallbackHandler');
const { wrapAsync } = require('../utils/helper');
const PandadocRouter = express.Router();
PandadocRouter.post('/callback', wrapAsync(async (req, res) => {
  const { body } = req;
  const handler = new CallbackHandler(body);
  await handler.execute();
  res.send('OK');
}));

module.exports = { PandadocRouter };
