import webpack from 'webpack';
import path from 'path';

export default (env, args) => {
  const isProduction = args.mode === 'production';
  const devtool = !isProduction && 'inline-source-map';
  const rules = [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
  ];

  return {
    entry: './src/entries/sample.jsx',
    output: {
      path: path.join(__dirname, './output/'),
      filename: 'sample.js',
    },
    module: { rules },
  };
};
