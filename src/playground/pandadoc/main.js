// @ts-check
require('dotenv').config();
const pandadoc = require('pandadoc-node-client');
const documentCreateRequest = require('./sample2');
const { SYSTEM_ENV } = require('../../config/env');

async function main() {
  const configuration = pandadoc
    .createConfiguration({ authMethods: { apiKey: SYSTEM_ENV.PANDADOC_API_KEY } });
  const apiDocument = new pandadoc.DocumentsApi(configuration);
  const document = await apiDocument.createDocument({ documentCreateRequest });
  console.log(document.infoMessage);
  for (let i = 0; i < 4; i++) {
    await new Promise((rs) => setTimeout(rs, 1000));
    const documentStatus = await apiDocument.detailsDocument({ id: document.id });
    console.log(documentStatus);
    if (documentStatus.status === 'draft') { break; }
  }
  const link = await apiDocument.sendDocument({
    id: document.id,
    documentSendRequest: {
      message: 'test',
      silent: false,
      subject: 'test peminjaman',
    },
  });
  console.log(link);
}

if (process.argv[1] === __filename) {
  main();
}
