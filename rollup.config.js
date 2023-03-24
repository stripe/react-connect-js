import babel from "rollup-plugin-babel";
import ts from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";

import pkg from "./package.json";

const PLUGINS = [
  ts({
    tsconfigOverride: { exclude: ["**/*.test.ts"] },
  }),
  babel({
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  }),
  replace({
    _VERSION: JSON.stringify(pkg.version),
  }),
];

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: PLUGINS,
  },
  // UMD build with inline PropTypes
  {
    input: "src/index.ts",
    external: ["react"],
    output: [
      {
        name: "ReactConnect",
        file: pkg.browser,
        format: "umd",
        globals: {
          react: "React",
        },
      },
    ],
    plugins: PLUGINS,
  },
];
