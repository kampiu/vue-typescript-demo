import Vue from 'vue';
import App from './App.vue';
import router from './route/index';
import store from './store/index';
import './../registerServiceWorker';
import './../assets/css/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
