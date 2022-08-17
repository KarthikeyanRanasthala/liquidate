#!/usr/bin/env node

const { resolve } = require("path");
const { existsSync } = require("fs");

const { rollup } = require("rollup");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const typescript = require("@rollup/plugin-typescript");
const { babel } = require("@rollup/plugin-babel");

const build = async (input) => {
  let bundle;
  let buildFailed = false;

  try {
    bundle = await rollup({
      input,
      external: ["solid-js/web"],
      plugins: [
        peerDepsExternal(),
        typescript({
          allowJs: true,
        }),
        babel({
          extensions: [".tsx", ".ts", ".js"],
          babelHelpers: "bundled",
          presets: [["solid", { generate: "ssr", hydratable: false }]],
        }),
      ],
    });

    await bundle.write({
      format: "commonjs",
      dir: "dist",
    });
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }

  if (bundle) {
    await bundle.close();
  }

  process.exit(buildFailed ? 1 : 0);
};

const validateEntryPoint = () => {
  const entryFiles = ["entry.tsx", "entry.ts", "entry.jsx", "entry.js"];

  let entryFile = "";

  for (let i = 0; i < entryFiles.length; i++) {
    if (existsSync(resolve(process.cwd(), entryFiles[i]))) {
      entryFile = entryFiles[i];
      break;
    }
  }

  if (entryFile === "") {
    console.error("Entry file doesn't exist");

    process.exit(1);
  }

  build(`./${entryFile}`);
};

const start = () => {
  const { startServer } = require("liquidate");

  startServer();
};

const argv = process.argv.slice(2);

switch (argv[0]) {
  case "build":
    validateEntryPoint();
    break;

  case "start":
    start();
    break;

  default:
    console.error("Wrong argument");
    process.exit(1);
}
