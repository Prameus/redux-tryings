module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathPrefix: 'src'
          },
          {
            rootPathPrefix: '~screens',
            rootPathPrefix: 'src/screens/index'
          },
          {
            rootPathPrefix: '~assets',
            rootPathPrefix: 'src/assets/index'
          },
          {
            rootPathPrefix: '~components',
            rootPathPrefix: 'src/components/index'
          }
        ]
      }
    ]
  ]
};
