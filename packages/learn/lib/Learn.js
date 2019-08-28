const http = require("http");
const { EventEmitter } = require("events");
const { logger } = require("@learn/utils");
const Koa = require("koa");

const { bootstrap } = require("./core/index");

class Learn extends EventEmitter {
  constructor() {
    super();

    this.app = new Koa();
    this.server = http.createServer(this.app.callback());
    this.log = logger;

    this.config = {
      name: "Learn Project",
      port: process.env.PORT || 3000
    };
  }

  /* Server related */
  async start() {
    try {
      this.emit("server:starting");

      this.server.listen(this.config.port, async err => {
        if (err) throw err;

        console.log("Server started on port ->", this.config.port);
      });
    } catch (error) {
      this.stopWithError(error);
    }
  }

  stop() {
    this.emit("server:stopping");

    // Destroy server and available connections.
    this.server.destroy();

    // Kill process.
    process.exit(1);
  }

  stopWithError(err) {
    this.log.debug(`⛔️ Server wasn't able to start properly.`);
    this.log.error(err);
    return this.stop();
  }

  registerPlugins(plugins) {
    this.plugins = plugins;
  }

  bootstrap() {
    bootstrap(this);
  }
}

module.exports = new Learn();
