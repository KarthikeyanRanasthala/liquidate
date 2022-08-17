const Home = (props) => <h1>Hello{props.name ? `, ${props.name}!` : "!"}</h1>;

const About = () => <h1>This is Liquidate</h1>;

export const routes = {
  "/": {
    Component: Home,
    getInitialProps: ({ query }) => ({
      name: query.name,
    }),
  },
  "/about": {
    Component: About,
  },
};

export const PORT = 3000;
