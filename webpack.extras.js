const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default (webpackConfig) => {
    const config = {
        ...webpackConfig,
        plugins: [...webpackConfig.plugins, new MiniCssExtractPlugin()],
        module: {
            ...webpackConfig.module,
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                          loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        },
                        {
                            loader: 'less-loader' // compiles Less to CSS
                        }
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(eot|woff|woff2|ttf|ttc|png|svg|jpg|jpeg|gif|cgm|tiff|webp|bmp|ico)$/i,
                    loader: 'file-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.json/,
                    loader: 'json-loader',
                    exclude: /node_modules/
                },
            ]
        }
    }
    return config;
}