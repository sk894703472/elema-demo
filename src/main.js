// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import sellers from './components/sellers/sellers.vue'
import './common/stylus/index.styl'
import './common/stylus/icon.styl'

Vue.use(VueRouter);
Vue.use(VueResource)
let routes = [{
	path: '/',
	component: goods
 },{
    path: '/ratings',
    component: ratings
},{
    path: '/sellers',
    component: sellers
}]
let router = new VueRouter( {
	mode:'history',
	linkActiveClass:'active',
    routes
})
new Vue({
    router,
    ...App
}).$mount('#app')