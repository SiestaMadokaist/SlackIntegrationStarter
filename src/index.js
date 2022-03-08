// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
// const { Main } = require('./controllers/Main/main');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/events', (req, res, next) => {
  const { token, challenge, type } = req.body;
  console.log(req.body);
  return res.send(challenge);
});

app.get('/', (req, res, next) => {
  console.log(req.body);
  return res.send('OK');
});


// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });