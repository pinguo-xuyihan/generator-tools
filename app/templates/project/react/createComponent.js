var fs = require("fs");

var arguments = process.argv.splice(2);
if (arguments.length === 0) {
	console.log('missing directory name param');
	process.exit();
}

var components  = arguments[0];
var appName = '<%= appname %>'.toLocaleLowerCase();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// update style template
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
var styleTpl = [];
styleTpl.push('.' + appName + '-components-' + components + '{');
styleTpl.push('');
styleTpl.push('}');
styleTpl = styleTpl.join('\n');

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// update js template
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
var jsTpl = [];
jsTpl.push("import React, {Component, render} from 'react';");
jsTpl.push("require('./"+components+".less');");
jsTpl.push("export default class "+ components+" extends Component {");
jsTpl.push("    render () {");
jsTpl.push("         return (");
jsTpl.push("         );");
jsTpl.push("    }");
jsTpl.push("}");
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

mkdirSync('app/components/' + components);

writeFile ('app/components/'+ components + '/' + components + '.less', styleTpl);
writeFile ('app/components/'+ components + '/' + components + '.js', jsTpl);

console.log('Create component Success!');
