import express from "express";
import { renderToString } from "solid-js/web";

export interface EntryConfig {
  routes: Record<
    "string",
    {
      Component: () => import("solid-js").JSX.Element;
    }
  >;
}

export const startServer = (entryConfig: EntryConfig) => {
  const app = express();

  const { routes } = entryConfig;

  Object.entries(routes || {}).map(([path, config]) => {
    app.get(path, (_, res) => {
      const { Component } = config;

      if (!Component) {
        res.status(500).send();
      }

      try {
        res.send(
          `<!DOCTYPE html><html><body>${renderToString(() => (
            <Component />
          ))}</body></html>`
        );
      } catch (error) {
        console.error({ error });
        res.status(500).send();
      }
    });
  });

  app.listen(3000, () => {
    console.log("Listening...");
  });
};
