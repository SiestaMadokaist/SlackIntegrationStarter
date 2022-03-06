import mocha from 'mocha';
import { expect } from 'chai';
import { Main } from './main';
describe('Run', () => {
  it('can run', () => {
    const main = new Main();
    const result = main.run();
    expect(result).to.eq('hello world');
  });
});