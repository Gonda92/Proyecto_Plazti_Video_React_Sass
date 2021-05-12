const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        //output es donde vamos a guardar nuetros archivos rsultantes cuando hagamos la compilacion 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        //resolve detecta el directorio en el que nos encontramos
        //filename para poner nombre al aarchivo principal
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    //creamos un modulo con las reglas necesarias para nuestro proyecto
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                type: "asset/resource"
            } ,
        ],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin ({
            filename: 'assets/[name].css' //referencia para trabajar desde webpack son sass
        }),
    ]
};