const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
// When the page is loaded / index.html is loaded
// it will look for the js file in src/index.js
 entry: './src/index.js',
 output: {
    // the file that will be created after i build my js project
   path: path.resolve(__dirname, 'dist'),
   // the file that will be created is called bundled.js
   // it will be created inside <working folder>/dist
   filename: 'bundle.js',
     // basePath of my url, www.muzaffar.com  = /
     // www.muzaffar.com/e-commerce = /e-commerce
   publicPath: '/',
 },
 resolve: {
    // the file that will be handled/resolved by webpack
    // .ts, .tsx and .js files
   extensions: ['.ts', '.tsx', '.js'],
 },
 module: {
   rules: [
     {
        // if it is ended with .ts and .tsx -> use ts-loader loader
       test: /\.(ts|tsx)$/,
       exclude: /node_modules/,
       use: 'ts-loader',
     },
     {
         // if it is ended with .js  -> use babel-loader loader
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env', '@babel/preset-react'],
         },
       },
     },
   ],
 },
 plugins: [
      // the plugin to read .html file - HTMLWebpackPlugin
   new HtmlWebpackPlugin({

     template: './public/index.html',
   }),
 ],
devServer: {
  static: {
    // everything inside public folders will be threat as static file
    directory: path.resolve(__dirname, 'public'), // serve static files like images
  },
  historyApiFallback: true,
  port: 3000,  // port 3000 
  open: true,
},


};
