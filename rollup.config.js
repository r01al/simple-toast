import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

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
    resolve()
  ]
};
