import { renderToString } from "solid-js/web";

const Component = () => <h1>Hello, Liquidate!</h1>;

export const greet = () => console.log(renderToString(() => <Component />));
