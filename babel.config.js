module.exports =  {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    ignore: [/node_modules/(?!react-native-modal)],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/plugin-proposal-class-properties'
    ],
    babelrcRoots: [
        '.'
    ],
  };