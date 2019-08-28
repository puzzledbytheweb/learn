const Koa = require("koa");

module.exports = plugins =>
  plugins.map(plugin => {
    return Object.assign({}, { app: new Koa(), ...plugin });
  });
