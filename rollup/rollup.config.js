import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "build/index.js",
  output: {
    file: "build/hello.js",
    format: "umd",
    sourcemap: true,
    name: "hello",
    exports: "named"
  },
  plugins: [resolve(), commonjs()]
};
