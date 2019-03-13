// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from 'element-ui';
import './css/base.css';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter  from 'vue-router';
import App from './App.vue';
import Vuex from 'vuex';
import router  from './router/index';
import HelloWorld from '@/components/login';

Vue.config.productionTip = false;

//接口地址前缀
//Vue.prototype.apiRoot='http://127.0.0.1';

Vue.use(ElementUI);

Vue.use(VueRouter);
Vue.use(Vuex);

var store = new Vuex.Store({//store对象
  state:{
      
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

