const { EventEmitter } = require("events");
const Koa = require("koa");

class Learn extends EventEmitter {
  constructor() {
    super();

    this.app = new Koa();

    this.config = {
      port: process.env.PORT || 4200
    };
  }

  async start() {
    this.emit("server:starting");

    this.app.listen(this.config.port);
  }
}

module.exports = Learn;
