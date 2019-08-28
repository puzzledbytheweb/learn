const routes = require("./api/routes");

// Must expose all the routes for this plugin
module.exports = {
  name: "File Share",
  description: "This plugin allows users to share files between themselves",
  routes
};
