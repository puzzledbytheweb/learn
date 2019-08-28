const mount = require("koa-mount");

const {
  generatePluginsWithKoaApp,
  generateRoutersWithPrefix,
  generateRoutes
} = require("./generator");

/*
 * @params: {Learn}
 * This function does all the heavy lifting before starting the server
 */

module.exports = learn => {
  const { app } = learn;

  // Create a Koa app for each plugin
  const pluginsWithKoaApp = generatePluginsWithKoaApp(learn.plugins);

  // Create a Router for each of those Plugins/Apps
  const pluginsWithRouter = generateRoutersWithPrefix(pluginsWithKoaApp);

  // Generate routes for each Plugin
  const pluginsWithGeneratedRoutes = pluginsWithRouter.map(
    plugin =>
      (plugin.router = generateRoutes(plugin.router, plugin.config.routes))
  );

  // Mount plugins in main app
  pluginsWithGeneratedRoutes.forEach(plugin => app.use(mount(plugin.app)));
};
