import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

const config = defineConfig({
  input: "./src/index.tsx",
  output: {
    format: "commonjs",
    dir: "dist",
  },
  plugins: [
    peerDepsExternal(),
    typescript(),
    babel({
      extensions: [".tsx", ".ts"],
      babelHelpers: "bundled",
      presets: [["solid", { generate: "ssr", hydratable: false }]],
    }),
  ],
});

export default config;
