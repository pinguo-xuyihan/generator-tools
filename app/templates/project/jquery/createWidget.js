var fs = require("fs");

var arguments = process.argv.splice(2);
if (arguments.length === 0) {
	console.log('missing directory name param');
	process.exit();
}

var widget  = arguments[0];
var subDir   = arguments[1] || '' ; 
var appName = '<%= appname %>'.toLocaleLowerCase();

var htmlTpl = [];
htmlTpl.push('<div class="styleguide '+ appName +'-widget-' + widget + '">');
htmlTpl.push('');
htmlTpl.push('</div>');
htmlTpl = htmlTpl.join('\n');

var styleTpl = [];
styleTpl.push( '.'+appName +'-widget-' + widget + ' {');
styleTpl.push('');
styleTpl.push('}');
styleTpl = styleTpl.join('\n');

var jsTpl = [];

<%if(includeHandlebars){%>
jsTpl.push("var template = require('html-loader!./"+ widget +".handlebars');");
<%}else{%>
jsTpl.push("var template = require('html-loader!./"+ widget +".html');");
<%}%>
jsTpl.push(" require('./"+ widget +".less');");
jsTpl.push("");

jsTpl.push("module.exports = {");
jsTpl.push(" 	render: function () {");
jsTpl.push(" 		$('.root').html(template);");
jsTpl.push(" 		this.bind();");
jsTpl.push(" 	},");
jsTpl.push(" 	bind: function () {");
jsTpl.push(" 		//bind Dom Event");
jsTpl.push(" 	},");
jsTpl.push("};");

jsTpl = jsTpl.join('\n');


function mkdirSync (dir, mode) {
	mode = mode || 0755;

	if(!fs.existsSync(dir)) {
		fs.mkdirSync(dir, mode)
	} else {
		console.log('Directory [' + dir + '] has existed');
		process.exit();
	}
}

function writeFile (filename, content) {
	fs.open(filename, 'w', '0644', function (e, fd) {
	    
	    if(e) throw e;
	    
	    fs.write(fd, content, function(e){
	        if(e) throw e;
	        fs.closeSync(fd);
	    });
	});
}

if(subDir){
	
	mkdirSync('app/widget/' + subDir + '/'+ widget);
	writeFile ('app/widget/' + subDir + '/'+ widget + '/' + widget + '.less', styleTpl);
	writeFile ('app/widget/' + subDir + '/'+ widget + '/' + widget + '.js', jsTpl);
	<%if(includeHandlebars){%>
	writeFile ('app/widget/' + subDir + '/'+ widget + '/' + widget + '.handlebars', htmlTpl);
	<%}else{%>
	writeFile ('app/widget/' + subDir + '/'+ widget + '/' + widget + '.html', htmlTpl);
	<%}%>

}else{
	mkdirSync('app/widget/' + widget);
	writeFile ('app/widget/'+ widget + '/' + widget + '.less', styleTpl);
	writeFile ('app/widget/'+ widget + '/' + widget + '.js', jsTpl);
	<%if(includeHandlebars){%>
	writeFile ('app/widget/'+ widget + '/' + widget + '.handlebars', htmlTpl);
	<%}else{%>
	writeFile ('app/widget/'+ widget + '/' + widget + '.html', htmlTpl);
	<%}%>

}


console.log('Create widget Success!');
