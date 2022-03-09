// @ts-check
require('dotenv').config();
const pandadoc = require('pandadoc-node-client');

const { SYSTEM_ENV } = require('../../config/env');
async function main() {
  const configuration = pandadoc
    .createConfiguration({ authMethods: { apiKey: SYSTEM_ENV.PANDADOC_API_KEY } });
  const apiDocument = new pandadoc.DocumentsApi(configuration);
  const documentId = '7pMnj9RXjqbFVCYBWfd4wZ';
  const document = await apiDocument.downloadDocument({ id: documentId });
  // console.dir(document, { depth: 5 });
}

if (process.argv[1] === __filename) {
  main();
}
