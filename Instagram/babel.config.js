module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@theme': './theme',
            '@types': './types',
            '@data': './assets/data',
          },
        },
      ],
    ],
  };
};
clearImmediate