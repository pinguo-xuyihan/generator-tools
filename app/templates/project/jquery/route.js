/**
 * @author xuyihan@camera360.com
 * @date 2016.11.25
 *
 * regist async module for loaded  when system is running
**/

module.exports = {

    DEFUALT_PAGE : 'index',

    init : function(){

        var me = this;

        window.addEventListener('hashchange', function () {
            me.navigation();
        }, false);

    },
    
    navigation : function() {
    
        $('.root').empty(); 

        var path = this.getPath();

        require.ensure([],function(require){

              var page = require('Page/' + path);
              page.render();
        })
    },

    getPath : function (){

        var hash  = location.hash.split("#")[1] || this.DEFUALT_PAGE;
        var pageParam  = hash.split('_');
        var dir   = pageParam.join('/'); 
        var page  = pageParam.pop();
        var path  =  '';

        dir = dir ? dir + '/' : '';
        path = dir + page;

        return path;
    }
    
}

