// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
// const { Main } = require('./controllers/Main/main');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.argv[1] === __filename) {
  app.listen(30000, () => { console.log('listening on port 30000'); });
}
