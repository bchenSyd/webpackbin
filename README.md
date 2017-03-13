1.touch index.js. you don't have to add content to it
2.touch webpack.config.js
```
var path = require('path')

module.exports= {
	   entry: "./index.js",
		output: {
			path: "/"
		},
		devServer: {
		  port: 3002
		}
}
```
3. webpack-dev-server
