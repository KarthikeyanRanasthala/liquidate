import express, { Request } from "express";
import { renderToString } from "solid-js/web";
import importCwd from "import-cwd";

type InitialProps = Record<string, any>;

export interface EntryConfig {
  routes: Record<
    string,
    {
      Component: (props: InitialProps) => import("solid-js").JSX.Element;
      getInitialProps?: (req: Request) => Promise<InitialProps>;
    }
  >;
  PORT: number;
}

export const startServer = () => {
  const app = express();

  const entryConfig = importCwd("./dist/entry.js") as EntryConfig;

  const { routes, PORT = 3000 } = entryConfig;

  Object.entries(routes || {}).map(([path, config]) => {
    app.get(path, async (req, res) => {
      const { Component, getInitialProps = () => {} } = config;

      if (!Component) {
        res.status(500).send();
      }

      try {
        const initialProps = await getInitialProps(req);

        res.send(
          `<!DOCTYPE html><html><body>${renderToString(() => (
            <Component {...initialProps} />
          ))}</body></html>`
        );
      } catch (error) {
        console.error({ error });
        res.status(500).send();
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Listening... http://localhost:${PORT}`);
  });
};
