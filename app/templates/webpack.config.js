var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/dev-server',
        <%if(includeReact){%>
        'react-hot-loader/patch', 
        <%}%>
        path.join(__dirname, './app/app.js')
    ],

	output: {

		filename : 'bundle.js',
		path : path.join(__dirname, 'build') ,
		sourceMapFilename : 'bundle.map.js',
		
	},
	devtool: "source-map",

	module: {

		loaders:[
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader' 
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
			},
			{ 
				test: /\.(png|jpg)$/,    
				loader: "url-loader?limit=10000" 
			},
			<%if(includeReact){%>
           	{ 	
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query : {
					presets:['react','es2015'],
				}		
			},
			{
                test: /\.js$/, 
                loaders: [ "react-router-loader",'babel-loader?presets[]=react'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'app/page') 
            },
			<%}%>
			<%if(includeVue){%>
			{   
		        test: /\.vue$/, 
		        loader: 'vue-loader',  
		    },
		    { 	
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query : {
					presets:['es2015'],
				}
			},
			<%}%>
			<%if(supportECMA6){%>
			{ 	
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query : {
					presets:['es2015'],
				}
			},
			<%}%>
			<%if(includeHandlebars){%>
			{ 	test: /\.handlebars$/, 
				loader: "handlebars-loader" }
			<%}%>
		]
	},

	resolve : {
	    alias: {
	        Page : path.resolve(__dirname, 'app/page/'),
	        <%if(includeJquery){%>
	        Widget : path.resolve(__dirname , 'app/widget'),
	        <%}%>
	        <%if(includeReact){%>
	        Components : path.resolve(__dirname , 'app/components'),
	       	<%}%>
	    }
	},
	
	externals: {
	    <%if(includeJquery){%>
	    "jquery": "jQuery"
	    <%}%>
	},

	devServer: {
        hot: true,
        inline: true
    },

    plugins: [
    	new webpack.NoErrorsPlugin(), 
      	new webpack.HotModuleReplacementPlugin(),
      	<%if(includeReact){%>
      	new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        <%}%>
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
