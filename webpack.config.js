const webpack = require('webpack');
const path = require('path');

function getPlugin() {
    if (process.env.NODE_ENV === 'production') {
        return [
            new webpack.optimize.UglifyJsPlugin()
        ];
    } else {
        return [

        ];
    }
}

config = {
    entry: {
        main: ['./src/main.ts']
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist/'),
        publicPath: path.resolve('./dist/'),
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.ts', '.js'],
        alias: {
            'masonry-layout': '../node_modules/masonry-layout/masonry.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles SASS to CSS
                },
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }, {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    },
                },
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        ...getPlugin()
    ]
};

module.exports = config;
