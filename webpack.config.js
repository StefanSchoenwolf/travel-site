/*const path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}*/
const path = require("path");
module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },
    module: {
        rules: [ // use to be loaders but is now "rules:"
                {
                    loaders: "babel-loader", // need to have -loader after babel
                    query: {
                        presets: ["es2015"]
                    },
                    test: /\.js$/,
                    exclude: /node_modules/
            }
        ]
    }
}

