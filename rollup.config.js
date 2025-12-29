import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/simple-toast.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/simple-toast.esm.js',
      format: 'es'
    },
    {
      file: 'dist/simple-toast.umd.js',
      format: 'umd',
      name: 'SimpleToast',
      exports: 'named'
    },
    // Minified version
    {
      file: 'dist/simple-toast.min.js',
      format: 'umd',
      name: 'SimpleToast',
      exports: 'named',
      plugins: [terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })]
    }
  ],
  plugins: [
    resolve(),
    // Only apply Babel to ESM build
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js'],
      exclude: 'node_modules/**',
      // Only transpile for ESM output
      // This will run for all outputs, but ESM is the one that needs ES5
    })
  ]
};
