import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'bundle-2.js', // equivalent to --output
  plugins: [ babel() ],
  format: 'es'
};