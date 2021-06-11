const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common,{    
    mode:"production",
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [        
        new Dotenv({
          path: "./prod.env",
        }),
    ],    
})