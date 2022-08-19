const Home = (props) => <h1>Hello{props.name ? `, ${props.name}!` : "!"}</h1>;

const About = () => <h1>This is Liquidate</h1>;

const Component = (props) => <h1>{props.text}</h1>;

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
  "/stocks/:id": {
    Component,
    getInitialProps: ({ params }) => ({
      text: params.id.split("-").join(" "),
    }),
  },
  "/spaces/:spaceId/posts/:postId": {
    Component,
    getInitialProps: ({ params }) => ({
      text: `Viewing Post: ${params.postId} in Space: ${params.spaceId}`,
    }),
  },
};

export const PORT = 3000;
