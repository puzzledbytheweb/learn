/*
 * @params: router -> Koa Router
 * @params: routes -> [{method: HTTP_METHOD/String, path: String, controller: Function}]
 */

const METHOD_OBJECT = {
  get: (router, path, controller) => router.get(path, controller),
  post: (router, path, controller) => router.post(path, controller)
};

module.exports = (router, routes = []) => {
  routes.forEach(route => {
    const { method, path, controller } = route;

    // Call function for given method
    METHOD_OBJECT[method](router, path, controller);
  });
};
