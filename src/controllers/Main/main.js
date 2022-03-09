// @ts-check
class Main {
  constructor(message = 'hello world') {
    /** @private */
    this.message = message;
  }

  /** @returns {string} */
  getMessage() {
    return this.message;
  }
}

module.exports = { Main };
