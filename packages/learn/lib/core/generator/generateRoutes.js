/*
 * @params: router -> Koa Router
 * @params: routes -> [{method: HTTP_METHOD/String, path: String, controller: Function}]
 */

const METHOD_OBJECT = {
  get: (router, path, controller) => router.get(path, controller),
  post: (router, path, controller) => router.post(path, controller)
};

module.exports = (router, routes = []) => {
  const newRouter = Object.assign({}, router);

  routes.forEach(route => {
    const { method, path, controller } = route;

    // Register routes for given method
    METHOD_OBJECT[method](newRouter, path, controller);
  });

  return newRouter;
};
