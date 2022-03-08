// @ts-check
/**
 * @type {import('pandadoc-node-client').DocumentCreateRequest}
 */
const request = {
  name: 'Simple API Sample Document from PandaDoc Template',
  templateUuid: 'rhPkC5mZQErKj3VpadmVdb',
  recipients: [
    {
      email: 'josh@example.com',
      firstName: 'Josh',
      lastName: 'Ron',
      role: 'user',
    },
  ],
  tokens: [
    {
      name: 'Favorite.Pet',
      value: 'Panda',
    },
  ],
  fields: {
    'Favorite.Color': {
      value: 'PandaDoc green',
    },
    Delivery: {
      value: 'Same Day Delivery',
    },
    Like: {
      value: true,
    },
    Date: {
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
  images: [
    {
      name: 'Image 1',
      urls: [
        'https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png',
      ],
    },
  ],
  pricingTables: [
    {
      name: 'Pricing Table 1',
      dataMerge: true,
      options: {
        taxFirst: {
          name: 'tax',
          type: 'percent',
          value: 10,
        },
      },
      sections: [
        {
          title: 'Sample Section',
          _default: true,
          rows: [
            {
              options: {
                optional: true,
                optionalSelected: true,
                qtyEditable: true,
              },
              data: {
                /**
                 * @todo
                 * open: node_modules/pandadoc-node-client/dist/models/PricingTableRequestRowData.js
                 * change the baseName of each of this variable to FirstCamelCase format.
                 * e.g:
                 * name -> Name
                 * description -> Description
                 * price -> Price
                 * qty -> QTY
                 */
                name: 'Toy Panda',
                description: 'Fluffy!',
                price: 10,
                qty: 3,
              },
              customFields: {
                Fluffiness: '5 / 5',
              },
            },
          ],
        },
      ],
    },
  ],
};
module.exports = request;
