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

- Open [http://localhost:3000](http://localhost:3000) and [http://localhost:3000?name=Karthikeyan](http://localhost:3000?name=Karthikeyan)