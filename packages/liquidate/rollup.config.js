import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

const config = defineConfig({
  input: "./src/index.ts",
  output: {
    format: "commonjs",
    dir: "dist",
  },
  plugins: [
    typescript(),
    babel({
      extensions: [".ts"],
      babelHelpers: "bundled",
    }),
  ],
});

export default config;
