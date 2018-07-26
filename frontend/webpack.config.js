const path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": 'bundle.js' // this is the compiled final javascript file which we will include in the index.html
    },
    "devtool": 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
    "devServer": {
      "contentBase": path.join(__dirname),
      "historyApiFallback": true, // this prevents the default browser full page refresh on form submission and link change
    },
    "module": {
        "rules": [
            // {
            //     "enforce": "pre",
            //     "test": /\.(js|jsx)$/,
            //     "exclude": /node_modules/,
            //     "use": "eslint-loader"
            // },
            {
              loader: 'babel-loader',
              test: /\.(js|jsx)$/,
              exclude: /node_modules/
            },
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
