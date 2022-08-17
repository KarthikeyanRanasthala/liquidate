const { startServer } = require("liquidate");

const Component = () => <h1>Hello!</h1>;

startServer({
  routes: {
    "/": {
      Component,
    },
  },
});
