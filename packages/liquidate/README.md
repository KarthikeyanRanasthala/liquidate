# Liquidate

## Installation

```
npm install liquidate
```

## Usage

```js
// entry.js

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

// optional
export const PORT = 3000;
```

```json
// package.json

{
    "scripts": {
        "build": "liquidate build",
        "start": "liquidate start"
    }
}
```

- Run `npm run build` and `npm start`

- [http://localhost:3000](http://localhost:3000) 

- Query params, [http://localhost:3000?name=Karthikeyan](http://localhost:3000?name=Karthikeyan)

- Dynamic route params, [http://localhost:3000/stocks/reliance-industries](http://localhost:3000/stocks/reliance-industries)

- Nested dynamic route params, [http://localhost:3000/spaces/1/posts/2](http://localhost:3000/spaces/1/posts/2)