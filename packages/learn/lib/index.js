const Learn = require("./Learn");

const TEST_ROUTES = [
  {
    method: "get",
    path: "/",
    controller: ctx => {
      ctx.body = "INDEX ROUTE!!";
    }
  },
  {
    method: "post",
    path: "/",
    controller: ctx => {
      ctx.body = "Index route!!! POST!!";
    }
  },
  {
    method: "get",
    path: "/test",
    controller: ctx => {
      ctx.body = "Test route!!!";
    }
  }
];

// Generate Routes
Learn.generateRoutes(TEST_ROUTES);

// Start the server
Learn.start();
