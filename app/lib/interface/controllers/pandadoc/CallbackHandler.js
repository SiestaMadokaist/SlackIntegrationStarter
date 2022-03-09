// @ts-check
class PandadocCallbackHandler {
  static async handle(args) {
    const handler = new PandadocCallbackHandler(args);
    await handler.execute();
  }

  /**
   * @param {any} args
   */
  constructor(args) {
    this.args = args;
  }

  async execute() {
    console.dir(this.args, { depth: 10 });
    if (this.args) { return 'OK'; }
    return 'NOT OK';
  }
}

module.exports = { PandadocCallbackHandler };
