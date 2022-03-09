// @ts-check

const express = require('express');
const { PandadocCallbackHandler } = require('../../../interface/controllers/pandadoc/CallbackHandler');
const { wrapAsync } = require('../../../interface/utils/wrapAsync');
const PandadocRouter = express.Router();
PandadocRouter.post('/callback', wrapAsync(async (req, res) => {
  const { body } = req;
  const handler = new PandadocCallbackHandler(body);
  await handler.execute();
  res.send('OK');
}));

module.exports = { PandadocRouter };
