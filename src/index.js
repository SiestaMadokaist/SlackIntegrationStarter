// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
const { PandadocRouter } = require('./routers/pandadoc');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pandadoc', PandadocRouter);

if (process.argv[1] === __filename) {
  app.listen(30001, () => { console.log('listening on port 30001'); });
}
