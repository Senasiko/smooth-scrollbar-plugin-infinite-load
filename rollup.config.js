import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

const baseConfig = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
  ],
  external: ['smooth-scrollbar']
};

const esConfig = {
  output: {
    file: 'dist/module.js',
    format: 'es',
  },
};

const cjsConfig = {
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  }
}

export default [
  Object.assign(esConfig, baseConfig),
  Object.assign(cjsConfig, baseConfig),
]


