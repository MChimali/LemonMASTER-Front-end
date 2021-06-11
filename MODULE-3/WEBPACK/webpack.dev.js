const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");

module.exports = merge(common,{    
    mode:"development",
    devServer:{
        port:8081,
        stats:"errors-only",
        open: true,        
    },
    plugins: [        
        new Dotenv({
          path: "./dev.env",
        }),
    ],    
})

