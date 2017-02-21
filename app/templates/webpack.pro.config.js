var webpack = require('webpack');
var path = require('path');
var WebpackStrip = require('strip-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
    entry: path.join(__dirname, './app/app.js'),

	output: {

		filename: '[name]-[hash].min.js',
		path : path.join(__dirname, 'build') ,
		sourceMapFilename : 'bundle.map.js',
		
	},

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
			{ 	
				test: /\.handlebars$/, 
				loader: "handlebars-loader" 
			},
			<%}%>
			{ 
				test: /\.js$/, 
				loader: WebpackStrip.loader('debugger', 'console.log'),
				exclude: /node_modules/,
			}	
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
      	<%if(includeReact || includeVue){%>
      	new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        <%}%>

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
