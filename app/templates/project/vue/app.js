
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


//实例化vue模块 
Vue.use(VueRouter);
Vue.use(VueResource);

var app = Vue.extend({});

var router = new VueRouter({
    // 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// 路由表
router.map({
	 '/':{			
        component: function (resolve) {
	      require(['./page/index.vue'],resolve)
	    }
    },
    '/index':{
    	name : 'home',		
        component: function (resolve) {
	      require(['./page/index.vue'],resolve)
	    }
    },
    '/main':{
    	name : 'main',               //博客列表
        component: function (resolve) {
	      require(['./page/main.vue'],resolve)
	    }
    }
})

router.start(app, ".root");


