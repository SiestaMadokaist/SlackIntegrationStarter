require('mocha');

const { expect } = require('chai');

describe('integration', () => {
  it('should not be tested unless specified', () => {
    expect('hello').to.eq('world');
  });
});