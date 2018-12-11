var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '{{ dashCase name }}.js',
        library: '{{ camelCase name }}',
        libraryTarget: 'umd'
    },
    externals: {
        'redux': 'Redux',
        'redux-thunk': 'ReduxThunk'
    }
};