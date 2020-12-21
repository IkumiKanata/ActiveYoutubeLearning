module.exports = (api) => {
  const isProduction = api.env('production');
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '79',
          ie: '11',
          firefox: '72',
          safari: '13',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: !isProduction,
      },
    ],
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
