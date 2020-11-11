const path = require('path');
//引入vue-loader插件
const  VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports= {
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    //打包规则
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'

                ],
            },
            {
              test: /\.vue$/,
            loader: 'vue-loader'
            },
            {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

}