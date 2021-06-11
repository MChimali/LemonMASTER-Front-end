const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
var path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    resolve:{
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: {
        app:"./index.tsx",
        //vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],        
    },                            
    output:{
        filename:"[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules: [
            {
                test:/\.tsx?$/,
                exclude: /node_modules/,
                loader:"babel-loader",
            },
            {
                test:/\.css$/,                
                use:[MiniCssExtractPlugin.loader, "css-loader"],
            }, 
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[
                    MiniCssExtractPlugin.loader, 
                    {
                        loader:"css-loader",
                        
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test:/\.(png|jpg)$/,
                type:"asset/resource",
            },
            {
                test:/\.html$/,
                loader:"html-loader"
            }      
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            filename: "index.html",
            scriptLoading:"blocking",
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css",
        }),
        new CleanWebpackPlugin(),
    ],   
}