const path = require('path');


module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production"
}


//loaders
//Plugins



// production , development 

