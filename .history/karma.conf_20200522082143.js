module.exports = function(config) {
    config.set({

        browsers: ['PhantomJS'],

        files: [
            { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
            { pattern: 'test-context.js'}
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'test-context.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        }
    });
};