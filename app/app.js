const { SYSTEM_ENV } = require('./lib/constant/env');
const { app } = require('./lib/infrastructure/server');

app.listen(SYSTEM_ENV.PORT, () => {
  console.log(`listening on PORT: ${SYSTEM_ENV.PORT}`);
});
