import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import ts from 'rollup-plugin-ts';
import pkg from './package.json';
import json from '@rollup/plugin-json';

const PLUGINS = [
  ts({
    tsconfigOverride: {exclude: ['**/*.test.ts']},
  }),
  babel({
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  }),
  replace({
    // This string is replaced by the npm package version when bundling
    _NPM_PACKAGE_VERSION_: pkg.version,
  }),
  json(),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'},
    ],
    plugins: PLUGINS,
  },
  // UMD build with inline PropTypes
  {
    input: 'src/index.ts',
    external: ['react'],
    output: [
      {
        name: 'ReactConnect',
        file: pkg.browser,
        format: 'umd',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: PLUGINS,
  },
];
