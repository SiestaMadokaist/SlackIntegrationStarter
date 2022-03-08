// @ts-check
/**
 ** @type {import('pandadoc-node-client').DocumentCreateRequest}
 */
const request = {
  name: 'Simple API Sample Document from PandaDoc Template',
  templateUuid: 'WAHmYs4xDQ2bEkS8eF6XuG',
  recipients: [
    {
      email: 'homu@ramadoka.com',
      firstName: 'Homu',
      lastName: 'Ramadoka',
      role: 'user',
    },
    {
      email: 'siestamadokaist@gmail.com',
      firstName: 'Rama',
      lastName: 'Patria Himawan',
      role: 'Client',
    },
  ],
  fields: {
    borrower: {
      value: 'PandaDoc green',
    },
    borrowDate: {
      value: '2019-12-31T00:00:00.000Z',
    },
  },
  metadata: {
    my_favorite_pet: 'Panda',
  },
  tags: [
    'created_via_api',
    'test_document',
  ],
};
module.exports = request;
