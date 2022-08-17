# Liquidate

## Installation

```
npm install liquidate
```

## Usage

```js
// entry.js

const Component = () => <h1>Hello!</h1>;

export const routes = {
  "/": {
    Component,
  },
};
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