const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "[name].js",
        // chunkFilename: `chunk.[name].[hash].js`,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        mainFields: ['esm2017', 'module', 'main'],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new TerserPlugin({
        //     terserOptions: {
        //         output: {
        //             comments: false,
        //         },
        //         compress: false,
        //         mangle: false
        //     }
        // })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    },
                    mangle: false
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    }
};