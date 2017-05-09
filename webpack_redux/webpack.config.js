module.exports ={
  entry: {app:'./src/app.jsx'},
  output: {
    path: __dirname,
    filename: 'dist/[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
