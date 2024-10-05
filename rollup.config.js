import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "cheerio",
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    terser(),
  ],
};
