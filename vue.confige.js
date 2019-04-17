module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};