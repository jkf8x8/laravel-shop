
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import routeView from './RouteView'
Vue.use(VueRouter);
Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css';
import './components/common/directives';
import routes from './router'

const router = new VueRouter({
    // mode:'history',
    routes
})


const app = new Vue({
    el: '#app',
    render:h=>h(routeView),
    router
});
