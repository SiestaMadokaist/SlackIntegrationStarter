// @ts-check
class CallbackHandler {
  static async handle(args) {
    const handler = new CallbackHandler(args);
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

module.exports = { CallbackHandler };
