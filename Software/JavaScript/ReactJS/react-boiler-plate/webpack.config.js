const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/ShipIT"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              }, 
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          favicon:'./src/favicon.ico'
        })
      ],
      devServer:{
          inline:true,
          open:true,// Tells dev-server to open the browser after server had been started. Disabled by default.
          port:9090,   
          noInfo: true, //Tells dev-server to supress messages like the webpack bundle information. Errors and warnings will still be shown. devServer.noInfo is disabled by default.               
      }
};