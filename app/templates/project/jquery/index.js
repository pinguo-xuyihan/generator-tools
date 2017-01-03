/* jshint devel:true */
<%if(includeHandlebars){%>
var template = require('./index.handlebars');
<%}else{%>
var template = require('html-loader!./index.html');
<%}%>
require('./index.less');

module.exports = {

    render: function () {
    	<%if(includeHandlebars){%>
    	var context = {
    		solution: "jquery + webpack + handlebars", 
    	};
    	var html  = template(context);
        $('.root').html(html);
    	<%}else{%>
    	$('.root').html(template);
    	<%}%>
    } 
}
