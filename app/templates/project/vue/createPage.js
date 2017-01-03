var fs = require("fs");

var arguments = process.argv.splice(2);
if (arguments.length === 0) {
	console.log('missing directory name param');
	process.exit();
}

var page  = arguments[0];
var appName = '<%= appname %>'.toLocaleLowerCase();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// update js template
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
var vueTpl = [];
jsTpl.push("<template>");
jsTpl.push("<div>hello " + page + " component</div>");
jsTpl.push("</template>");
jsTpl.push("<script>");
jsTpl.push("</script>");
jsTpl.push("<style >");
jsTpl.push("</style>");
jsTpl = jsTpl.join('\n');


function writeFile (filename, content) {
	fs.open(filename, 'w', '0644', function (e, fd) {
	    
	    if(e) throw e;
	    
	    fs.write(fd, content, function(e){
	        if(e) throw e;
	        fs.closeSync(fd);
	    });
	});
}


writeFile ('app/page/' + page + '.vue', vueTpl);


console.log('Create component Success!');
