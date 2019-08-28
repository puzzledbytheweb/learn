const Router = require("koa-router");
const slugify = require("slugify");

module.exports = plugins => {
  return plugins.map(plugin => {
    const pluginWithRouter = Object.assign(
      {},
      { router: new Router(), ...plugin }
    );

    const { router, config } = pluginWithRouter;
    const { name } = config;

    router.prefix(slugify(name));

    return pluginWithRouter;
  });
};
