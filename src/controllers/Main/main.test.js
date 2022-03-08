// @ts-check
require('mocha');
const { expect } = require('chai');
const { Main } = require('./main');

describe('Run', () => {
  it('can run', () => {
    const main = new Main();
    expect(main.getMessage()).to.eq('hello world');
  });
});
