module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.png'],
        alias: {
          '@app': './src',
          '@components': './src/components',
        },
      },
    ],
  ],
};
