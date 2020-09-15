export default (webpackConfig) => {
    console.log(JSON.stringify(webpackConfig, null, 2));
    const config = {
        ...webpackConfig,
        module: {
            ...webpackConfig.module,
            rules: [
                {
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                      }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                      }, {
                        loader: 'less-loader' // compiles Less to CSS
                      }]
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
                    loaders: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.json/,
                    loader: 'json-loader',
                    exclude: /node_modules/
                },
            ]
        }
    }
    console.log(JSON.stringify(config, null, 2));
    return config;
}