// @ts-check
/**
 ** @type {import('pandadoc-node-client').DocumentCreateRequest}
 */
const request = {
  name: 'Contoh Tanda Tangan',
  templateUuid: 'Nz6kajjunGsBUduMZFHVPX',
  recipients: [
    {
      email: 'rama.himawan-guest@moladin.com',
      firstName: 'Homu',
      lastName: 'Ramadoka',
      role: 'Borrower',
      signingOrder: 1,
    },
    {
      email: 'homu@ramadoka.com',
      firstName: 'Rama',
      lastName: 'Patria Himawan',
      role: 'Lender',
      signingOrder: 2,
    },
  ],
  fields: {
    borrowerName: {
      value: 'Ramadoka',
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
