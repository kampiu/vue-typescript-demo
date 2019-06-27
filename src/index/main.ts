import Vue from 'vue';
import App from '@_I/App.vue';
import router from '@_I/route/index';
import store from '@_I/store/index';
import '@/registerServiceWorker';
import '@/assets/css/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
