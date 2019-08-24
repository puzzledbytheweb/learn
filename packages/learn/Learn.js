const { EventEmitter } = require("events");
const { logger } = require("@learn/utils");
const Koa = require("koa");

class Learn extends EventEmitter {
  constructor() {
    super();

    this.app = new Koa();
    this.log = logger;

    this.config = {
      port: process.env.PORT || 4200
    };
  }

  async start() {
    try {
      this.emit("server:starting");

      throw new Error("OH NOES!!");

      this.app.listen(this.config.port);
    } catch (error) {
      this.stopWithError(error);
    }
  }

  stopWithError(err) {
    this.log.debug(`⛔️ Server wasn't able to start properly.`);
    this.log.error(err);
    return this.stop();
  }
}

module.exports = new Learn();
